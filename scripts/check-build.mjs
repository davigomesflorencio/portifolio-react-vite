// Verifica se o build está correto. Roda depois de `npm run build`.
//
// Uso: node scripts/check-build.mjs [--render]
//   --render  sobe o `vite preview` e abre cada rota no Chrome headless,
//             conferindo se a página renderiza com <title> e <h1>.
//             Usa a variável CHROME_PATH ou procura o Chrome no lugar padrão.
//
// Sai com código 1 se alguma checagem falhar.
import { spawn, execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { gzipSync } from "node:zlib";

const SITE_URL = "https://davigomesflorencio.com.br";
// Limite do JS principal (gzip). Hoje está em ~94 KB; se passar disso,
// provavelmente alguma página ou biblioteca pesada voltou para o bundle inicial.
const MAIN_JS_BUDGET_KB = 150;

const errors = [];
const fail = (msg) => errors.push(msg);
const ok = (msg) => console.log(`  ✓ ${msg}`);
const section = (title) => console.log(`\n${title}`);

const read = (p) => readFileSync(p, "utf8");
const walk = (dir, filter, out = []) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, filter, out);
    else if (filter(full)) out.push(full);
  }
  return out;
};

// 1. Arquivos gerados pelo build
section("Arquivos do build");
for (const file of ["dist/index.html", "dist/robots.txt", "dist/sitemap.xml", "dist/llms.txt"]) {
  if (existsSync(file)) ok(file);
  else fail(`${file} não foi gerado`);
}
if (errors.length) report();

const html = read("dist/index.html");

// 2. SEO do index.html
section("SEO do index.html");
const seoChecks = [
  ["<title>", /<title>[^<]{10,}<\/title>/],
  ['<meta name="description">', /<meta name="description" content="[^"]{50,}"/],
  ['<link rel="canonical">', new RegExp(`<link rel="canonical" href="${SITE_URL}/"`)],
  ["<h1> no conteúdo inicial", /<h1>[^<]+<\/h1>/],
  ["dados estruturados (JSON-LD)", /<script type="application\/ld\+json">/],
];
for (const [name, re] of seoChecks) {
  if (re.test(html)) ok(name);
  else fail(`index.html sem ${name}`);
}

// 3. Assets referenciados pelo index.html existem
section("Assets do index.html");
for (const [, ref] of html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)) {
  if (existsSync(path.join("dist", ref))) ok(ref);
  else fail(`index.html aponta para ${ref}, que não existe em dist/`);
}

// 4. Tamanho do JS principal
section("Tamanho do JS principal");
const entry = html.match(/<script type="module" crossorigin src="(\/assets\/[^"]+\.js)"/)?.[1];
if (!entry) {
  fail("não encontrei o script principal no index.html");
} else {
  const kb = gzipSync(readFileSync(path.join("dist", entry))).length / 1024;
  const msg = `${entry}: ${kb.toFixed(1)} KB gzip (limite ${MAIN_JS_BUDGET_KB} KB)`;
  if (kb <= MAIN_JS_BUDGET_KB) ok(msg);
  else fail(`JS principal acima do limite — ${msg}`);
}

// 5. Rotas: App.tsx x sitemap.xml x llms.txt
section("Rotas, sitemap.xml e llms.txt");
const appRoutes = [...read("src/App.tsx").matchAll(/<Route path="([^"*]+)"/g)].map((m) => m[1]);
const sitemapRoutes = [...read("dist/sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].replace(SITE_URL, "") || "/",
);
const llms = read("dist/llms.txt");
for (const route of appRoutes) {
  const inSitemap = sitemapRoutes.includes(route);
  const inLlms = llms.includes(`(${SITE_URL}${route === "/" ? "/" : route})`);
  if (inSitemap && inLlms) ok(route);
  if (!inSitemap) fail(`rota ${route} está no App.tsx mas não no public/sitemap.xml`);
  if (!inLlms) fail(`rota ${route} está no App.tsx mas não no public/llms.txt`);
}
for (const route of sitemapRoutes) {
  if (!appRoutes.includes(route)) fail(`${route} está no sitemap.xml mas não existe no App.tsx`);
}

// 6. Imagens locais citadas no código existem em public/
section("Imagens locais");
const sources = [...walk("src", (f) => /\.(tsx?|css)$/.test(f)), "index.html"];
let images = 0;
for (const file of sources) {
  for (const [, ref] of read(file).matchAll(/["'(]((?:\.{0,2}\/)?[\w\-./ ]+\.(?:png|jpe?g|webp|avif|svg|gif|ico))["')]/g)) {
    const local = path.join("public", ref.replace(/^\.{0,2}\//, ""));
    if (existsSync(local) && statSync(local).isFile()) images++;
    else fail(`${file} cita ${ref}, que não existe em public/`);
  }
}
ok(`${images} referências de imagem encontradas em public/`);

// 7. (opcional) Renderização de cada rota no Chrome headless
if (process.argv.includes("--render")) await renderRoutes(appRoutes);

report();

function report() {
  if (errors.length) {
    console.error(`\n✗ ${errors.length} problema(s):`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log("\n✓ Todas as checagens passaram");
  process.exit(0);
}

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const candidates = [
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium-browser",
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ];
  return candidates.find((c) => existsSync(c));
}

async function renderRoutes(routes) {
  section("Renderização no Chrome headless");
  const chrome = findChrome();
  if (!chrome) {
    fail("Chrome não encontrado (defina CHROME_PATH)");
    return;
  }

  const port = 4173;
  const server = spawn("npx", ["vite", "preview", "--port", String(port), "--strictPort"], {
    shell: true,
    stdio: "ignore",
    // Grupo de processos próprio, para encerrar o shell e o vite juntos no Linux/macOS
    detached: process.platform !== "win32",
  });
  try {
    await waitForServer(`http://localhost:${port}/`);
    for (const route of [...routes, "/rota-que-nao-existe"]) {
      const dom = execFileSync(
        chrome,
        [
          "--headless=new",
          "--disable-gpu",
          "--no-sandbox",
          "--virtual-time-budget=8000",
          "--dump-dom",
          `http://localhost:${port}${route}`,
        ],
        { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], timeout: 60000 },
      );
      const title = dom.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
      // O conteúdo inicial do index.html é substituído pelo React; a página do app
      // tem a navbar com links, então ela confirma que o React montou.
      const mounted = dom.includes('class="App"');
      const hasH1 = /<h1[\s>]/.test(dom);
      if (mounted && hasH1 && title) ok(`${route} — ${title}`);
      else fail(`${route} não renderizou (React montou: ${mounted}, <h1>: ${hasH1}, title: "${title}")`);
    }
  } finally {
    if (process.platform === "win32") {
      try {
        execFileSync("taskkill", ["/pid", String(server.pid), "/T", "/F"], { stdio: "ignore" });
      } catch {
        // processo já encerrado
      }
    } else {
      try {
        process.kill(-server.pid, "SIGTERM");
      } catch {
        // processo já encerrado
      }
    }
  }
}

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // servidor ainda subindo
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`vite preview não respondeu em ${url}`);
}
