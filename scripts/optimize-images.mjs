// Converte PNG/JPG de public/ para WebP, redimensiona para o tamanho de exibição
// e normaliza os nomes ("Kotlin-Dark 1.png" -> "kotlin.webp").
//
// Uso: node scripts/optimize-images.mjs [--keep]
//   --keep  mantém os arquivos originais (por padrão eles são apagados)
//
// Imprime um JSON com { caminhoAntigo: { src, width, height } } para atualizar o código.
import { readdir, readFile, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Sem cache: no Windows o cache do sharp mantém o arquivo aberto e impede apagá-lo.
sharp.cache(false);

const PUBLIC_DIR = path.resolve("public");
const KEEP = process.argv.includes("--keep");

// Arquivos que não são convertidos: usados fora do site (Open Graph, links externos)
// ou que precisam continuar no formato original.
const SKIP = new Set(["homepage.jpg", "support.png", "twitter.png"]);
// Convertidos, mas o original fica (home.jpg é a imagem do Open Graph no index.html).
const KEEP_ORIGINAL = new Set(["home.jpg"]);

// Lado maior máximo (px) por pasta/prefixo: ~3x o tamanho em que a imagem aparece na tela.
const rules = [
  { test: (p) => /^(scannermlkit|screenshotgnix|facedetector)\/\d+\./.test(p), maxWidth: 720, quality: 80 },
  { test: (p) => /\/icon\./.test(p), maxSize: 288, quality: 90 },
  { test: (p) => /^(mobile|front|back)\//.test(p), maxHeight: 240, quality: 90 },
  { test: (p) => /^ic_/.test(p), maxSize: 450, quality: 88 },
  { test: (p) => p === "home.jpg", maxSize: 900, quality: 82 },
];

const normalizeName = (file) =>
  path
    .parse(file)
    .name.replace(/\s+\d+$/, "") // "Swift 1" -> "Swift"
    .replace(/-dark$/i, "") // "Kotlin-Dark" -> "Kotlin"
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const manifest = {};
let before = 0;
let after = 0;

for await (const file of walk(PUBLIC_DIR)) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;
  const rel = path.relative(PUBLIC_DIR, file).split(path.sep).join("/");
  if (SKIP.has(rel)) continue;

  const rule = rules.find((r) => r.test(rel)) ?? { maxSize: 1200, quality: 82 };
  const outRel = `${path.posix.dirname(rel) === "." ? "" : path.posix.dirname(rel) + "/"}${normalizeName(rel)}.webp`;
  const out = path.join(PUBLIC_DIR, outRel);

  const resize = rule.maxWidth
    ? { width: rule.maxWidth, withoutEnlargement: true }
    : rule.maxHeight
      ? { height: rule.maxHeight, withoutEnlargement: true }
      : { width: rule.maxSize, height: rule.maxSize, fit: "inside", withoutEnlargement: true };

  const input = await readFile(file);
  const info = await sharp(input)
    .resize(resize)
    .webp({ quality: rule.quality, alphaQuality: 100, effort: 6 })
    .toFile(out);

  before += input.length;
  after += info.size;
  manifest[rel] = { src: `/${outRel}`, width: info.width, height: info.height };

  if (!KEEP && !KEEP_ORIGINAL.has(rel) && path.resolve(out) !== path.resolve(file)) await unlink(file);
}

// Variantes menores dos logos dos carrosséis (exibidos com 80 px CSS), usadas no srcset:
// "kotlin.webp" (240 px) ganha "kotlin-80.webp" e "kotlin-160.webp".
const RESPONSIVE_DIRS = ["mobile", "front", "back"];
const RESPONSIVE_WIDTHS = [80, 160];
let variants = 0;

for (const dir of RESPONSIVE_DIRS) {
  for (const entry of await readdir(path.join(PUBLIC_DIR, dir))) {
    if (!entry.endsWith(".webp") || /-\d+\.webp$/.test(entry)) continue;
    const source = path.join(PUBLIC_DIR, dir, entry);
    const input = await readFile(source);
    for (const width of RESPONSIVE_WIDTHS) {
      const out = path.join(PUBLIC_DIR, dir, entry.replace(/\.webp$/, `-${width}.webp`));
      await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 90, alphaQuality: 100, effort: 6 }).toFile(out);
      variants++;
    }
  }
}

// Foto do topo da home (exibida com 300 px CSS): variantes para o srcset do TiltedCard
for (const width of [300, 450]) {
  const input = await readFile(path.join(PUBLIC_DIR, "home.webp"));
  await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 82, effort: 6 }).toFile(path.join(PUBLIC_DIR, `home-${width}.webp`));
  variants++;
}

console.log(JSON.stringify(manifest, null, 2));
console.error(`${variants} variantes responsivas geradas (logos em ${RESPONSIVE_DIRS.join(", ")} e foto da home)`);
console.error(
  `\n${Object.keys(manifest).length} imagens: ${(before / 1048576).toFixed(2)} MB -> ${(after / 1048576).toFixed(2)} MB`,
);
