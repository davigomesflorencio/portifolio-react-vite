import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/fotter";
import Particles from "../components/common/particles";
import GradientText from "../components/common/gradientText";

const privacyPolicySections = [
  {
    title: "1. Introdução",
    content: (
      <p>
        O <strong>Screenshot Gnix</strong> (
        <code>com.davi.dev.screenshootkmp</code>) é um aplicativo de edição e
        exportação de screenshots desenvolvido por <strong>Davi Gomes</strong>.
        Este documento descreve como o aplicativo lida com suas informações e
        dados.
      </p>
    ),
  },
  {
    title: "2. Coleta de Dados",
    content: (
      <>
        <p className="font-semibold mb-2">
          O Screenshot Gnix não coleta, armazena, transmite ou processa nenhum
          dado pessoal do usuário.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Não possui servidor próprio ou comunicação com a internet</li>
          <li>Não utiliza analytics, rastreamento ou telemetria</li>
          <li>Não possui anúncios ou SDKs de publicidade</li>
          <li>Não registra logs de uso ou comportamento</li>
        </ul>
        <p className="mt-2">
          Todas as operações são realizadas{" "}
          <strong>exclusivamente no dispositivo do usuário</strong>.
        </p>
      </>
    ),
  },
  {
    title: "3. Permissões Utilizadas",
    content: (
      <>
        <p className="font-semibold mb-3">Android</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-zinc-800">
                <th className="border border-gray-300 dark:border-zinc-600 px-3 py-2 text-left">
                  Permissão
                </th>
                <th className="border border-gray-300 dark:border-zinc-600 px-3 py-2 text-left">
                  Finalidade
                </th>
                <th className="border border-gray-300 dark:border-zinc-600 px-3 py-2 text-left">
                  Quando é usada
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  <code>READ_MEDIA_IMAGES</code> (API 33+)
                </td>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  Leitura de imagens da galeria
                </td>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  Ao importar uma imagem para edição
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  <code>WRITE_EXTERNAL_STORAGE</code> (até API 28)
                </td>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  Salvar arquivo na galeria
                </td>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  Ao exportar a screenshot editada
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="font-semibold mb-1">iOS</p>
        <p className="mb-3">
          O aplicativo acessa o diretório de cache do dispositivo para salvar
          temporariamente o arquivo antes do compartilhamento.
        </p>
        <p className="font-semibold mb-1">Desktop (Windows, macOS, Linux)</p>
        <p>
          O aplicativo salva arquivos na pasta <code>~/Pictures</code> do
          usuário.
        </p>
      </>
    ),
  },
  {
    title: "4. Armazenamento de Arquivos",
    content: (
      <>
        <p className="mb-2">
          Os arquivos gerados pelo aplicativo são salvos{" "}
          <strong>localmente no dispositivo</strong> do usuário:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Android 10+ (API 29+):</strong> Salvos na pasta
            Fotos/Pictures via MediaStore (armazenamento com escopo)
          </li>
          <li>
            <strong>Android 9 e anteriores:</strong> Salvos em{" "}
            <code>Pictures/</code> no armazenamento externo
          </li>
          <li>
            <strong>iOS:</strong> Salvos temporariamente no diretório de cache (
            <code>/Library/Caches/</code>)
          </li>
          <li>
            <strong>Desktop:</strong> Salvos em <code>~/Pictures/</code>
          </li>
        </ul>
        <p className="mt-2">
          Os arquivos pertencem exclusivamente ao usuário e podem ser excluídos
          a qualquer momento.
        </p>
      </>
    ),
  },
  {
    title: "5. Compartilhamento de Dados",
    content: (
      <>
        <p className="mb-2">
          O aplicativo permite que o usuário compartilhe imagens editadas por
          meio dos{" "}
          <strong>
            recursos nativos de compartilhamento do sistema operacional
          </strong>{" "}
          (Intent do Android, UIActivityViewController do iOS, abertura de
          arquivo no Desktop).
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            O compartilhamento é <strong>sempre iniciado pelo usuário</strong>,
            de forma explícita
          </li>
          <li>
            O aplicativo não controla para onde os dados são enviados após o
            compartilhamento
          </li>
          <li>
            Nenhum dado é enviado automaticamente para servidores externos
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Serviços de Terceiros",
    content: (
      <>
        <p className="mb-3">
          O aplicativo utiliza as seguintes bibliotecas de código aberto, todas
          sem coleta de dados:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-zinc-800">
                <th className="border border-gray-300 dark:border-zinc-600 px-3 py-2 text-left">
                  Biblioteca
                </th>
                <th className="border border-gray-300 dark:border-zinc-600 px-3 py-2 text-left">
                  Uso
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Jetpack Compose / Compose Multiplatform",
                  "Interface gráfica",
                ],
                ["Coil3", "Carregamento de imagens"],
                ["FileKit", "Seleção de arquivos"],
                ["Skiko", "Renderização gráfica multiplataforma"],
              ].map(([lib, use]) => (
                <tr key={lib}>
                  <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                    {lib}
                  </td>
                  <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                    {use}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2">
          Nenhuma dessas bibliotecas coleta dados do usuário.
        </p>
      </>
    ),
  },
  {
    title: "7. Dados de Crianças",
    content: (
      <p>
        O aplicativo não é direcionado a crianças menores de 13 anos e não
        coleta conscientemente informações de crianças.
      </p>
    ),
  },
  {
    title: "8. Plataformas Suportadas",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Android</strong> (versão mínima: Android 7.0 / API 24)
        </li>
        <li>
          <strong>iOS</strong> (ARM64)
        </li>
        <li>
          <strong>Desktop</strong> (Windows, macOS, Linux)
        </li>
      </ul>
    ),
  },
  {
    title: "9. Alterações nesta Política",
    content: (
      <p>
        Eventuais atualizações nesta política serão publicadas neste documento
        com a data de revisão atualizada. Como o aplicativo não coleta dados,
        alterações significativas são improváveis.
      </p>
    ),
  },
  {
    title: "10. Contato",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Desenvolvedor:</strong> Davi Gomes
        </li>
        <li>
          <strong>E-mail:</strong>{" "}
          <a
            href="mailto:davigomesflorencio@gmail.com"
            className="text-cyan-500 hover:underline"
          >
            davigomesflorencio@gmail.com
          </a>
        </li>
        <li>
          <strong>Pacote do app:</strong>{" "}
          <code>com.davi.dev.screenshootkmp</code>
        </li>
      </ul>
    ),
  },
];

const features = [
  {
    icon: "✂️",
    title: "Edição de Screenshots",
    description:
      "Importe e edite suas screenshots com ferramentas intuitivas e rápidas.",
  },
  {
    icon: "📤",
    title: "Exportação Fácil",
    description:
      "Exporte e compartilhe suas imagens editadas diretamente pelo sistema operacional.",
  },
  {
    icon: "🔒",
    title: "100% Privado",
    description:
      "Nenhum dado sai do seu dispositivo. Sem rastreamento, sem analytics.",
  },
  {
    icon: "🌐",
    title: "Multiplatforma",
    description:
      "Disponível para Android, iOS, Windows, macOS e Linux via Kotlin Multiplatform.",
  },
  {
    icon: "📱",
    title: "Interface Moderna",
    description:
      "UI construída com Compose Multiplatform para uma experiência fluida em todas as plataformas.",
  },
  {
    icon: "🚫",
    title: "Sem Anúncios",
    description:
      "Experiência limpa e sem interrupções. Foco total na sua produtividade.",
  },
];

const ScreenshotGnix = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <div
          style={{
            width: "100%",
            height: "500px",
            position: "absolute",
            marginInline: "auto",
          }}
        >
          <Particles
            particleColors={["#00d3f2"]}
            particleCount={200}
            particleSpread={5}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={2}
          />
        </div>
        <NavBar active="" />
        <div className="content-wrapper">
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center pt-[120px] gap-6">
            <div className="flex items-center justify-center w-24 h-24 bg-[#fafafa] dark:bg-[#27272a] rounded-2xl shadow-lg">
              <img
                src="./screenshotgnix/icon.png"
                alt={`Icon App`}
                className="w-full h-auto object-cover rounded-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            <div className="title w-full!">
              <GradientText
                colors={["#258176", "#CF85CD", "#00d3f2"]}
                animationSpeed={8}
                showBorder={false}
                className="custom-class"
              >
                Screenshot Gnix
              </GradientText>
            </div>

            <p className="subtitle max-w-2xl">
              Aplicativo multiplataforma de edição e exportação de screenshots,
              desenvolvido com <strong>Kotlin Multiplatform (KMP)</strong> e{" "}
              <strong>Compose Multiplatform</strong>. Disponível para Android,
              iOS e Desktop.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                "Kotlin Multiplatform",
                "Compose Multiplatform",
                "Android",
                "iOS",
                "Desktop",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/davigomesflorencio/screenshot_gnix_kmp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-black dark:text-white bg-cyan-400 hover:bg-cyan-500 rounded-lg transition-all duration-300 shadow-lg"
              >
                Ver no GitHub
              </a>
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="mt-16 text-center">
            <h2 className="title text-center mb-8">Screenshots</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "./screenshotgnix/1.png",
                "./screenshotgnix/2.png",
                "./screenshotgnix/3.png",
                "./screenshotgnix/4.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-700 max-w-[280px] w-full"
                >
                  <img
                    src={src}
                    alt={`Screenshot ${i + 1}`}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* About / Features Section */}
          <div className="mt-16 text-center">
            <h2 className="title text-center mb-8">Sobre o App</h2>
            <p className="subtitle text-center max-w-2xl mx-auto mb-10">
              O Screenshot Gnix nasceu da necessidade de ter uma ferramenta
              simples, rápida e sem anúncios para editar e exportar screenshots.
              Com KMP, o mesmo código core roda em Android, iOS e Desktop.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col gap-3 p-5 rounded-xl bg-[#fafafa] dark:bg-[#27272a] border border-gray-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <h3 className="font-semibold text-base">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Policy Section */}
          <div className="mt-16 mb-10">
            <h2 className="title text-center mb-2">Política de Privacidade</h2>
            <p className="subtitle text-center mb-8">
              Última atualização: 19 de março de 2026
            </p>

            <div className="max-w-3xl mx-auto space-y-8">
              {privacyPolicySections.map((section) => (
                <div
                  key={section.title}
                  className="p-6 rounded-xl bg-[#fafafa] dark:bg-[#27272a] border border-gray-200 dark:border-zinc-700"
                >
                  <h3 className="font-bold text-lg mb-3">{section.title}</h3>
                  <div className="text-sm text-gray-700 dark:text-zinc-300 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              ))}

              <div className="p-5 rounded-xl border border-cyan-300 dark:border-cyan-700 bg-cyan-50 dark:bg-cyan-900/20 text-center text-sm text-cyan-800 dark:text-cyan-200 italic">
                Este aplicativo foi desenvolvido com foco em privacidade. Nenhum
                dado seu sai do seu dispositivo sem sua autorização explícita.
              </div>
            </div>
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScreenshotGnix;
