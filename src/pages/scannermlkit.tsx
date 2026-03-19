import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/fotter";
import Particles from "../components/common/particles";
import GradientText from "../components/common/gradientText";

const privacyPolicySections = [
  {
    title: "1. Coleta e Processamento de Dados",
    content: (
      <>
        <p className="mb-2">
          O aplicativo utiliza o <strong>Google ML Kit Document Scanner</strong>{" "}
          para realizar a digitalização de documentos. É importante destacar
          que:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Processamento Local:</strong> Todo o processamento de imagem
            para detecção de documentos, corte e aprimoramento é feito
            localmente no seu dispositivo. As imagens não são enviadas para
            servidores externos para fins de processamento.
          </li>
          <li>
            <strong>Imagens e Galeria:</strong> O aplicativo solicita acesso à
            câmera e à galeria de fotos apenas para permitir que você capture
            novos documentos ou importe arquivos existentes para conversão.
          </li>
          <li>
            <strong>Arquivos PDF:</strong> O aplicativo gera arquivos PDF com
            nomes exclusivos. Esses arquivos são armazenados no armazenamento
            interno do seu dispositivo.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. Armazenamento de Dados",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Não mantemos um banco de dados em nuvem com seus documentos.</li>
        <li>Os documentos digitalizados são salvos diretamente no seu dispositivo.</li>
        <li>
          Se você excluir o aplicativo, os arquivos armazenados na pasta
          privada do app poderão ser removidos (dependendo das configurações do
          seu sistema operacional).
        </li>
      </ul>
    ),
  },
  {
    title: "3. Serviços de Terceiros",
    content: (
      <>
        <p className="mb-3">
          Nosso aplicativo utiliza os seguintes serviços de terceiros:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-zinc-800">
                <th className="border border-gray-300 dark:border-zinc-600 px-3 py-2 text-left">
                  Serviço
                </th>
                <th className="border border-gray-300 dark:border-zinc-600 px-3 py-2 text-left">
                  Uso
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  Google ML Kit
                </td>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  Funcionalidade de scanner. O processamento ocorre on-device,
                  mas o Google pode coletar métricas de desempenho e diagnóstico
                  agregadas para melhorar o serviço.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  Visualizadores Externos
                </td>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  Quando você utiliza a função "Visualizar", o arquivo é aberto
                  por um aplicativo de terceiros escolhido por você (ex: Google
                  Drive, Adobe Reader). A segurança desses dados passa a ser
                  responsabilidade do visualizador escolhido.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: "4. Permissões Solicitadas",
    content: (
      <>
        <p className="mb-2">
          Para funcionar corretamente, o app solicita:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Câmera:</strong> Para capturar fotos dos documentos.
          </li>
          <li>
            <strong>Armazenamento/Galeria:</strong> Para importar imagens e
            salvar os arquivos PDF gerados.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Compartilhamento de Dados (Exportação)",
    content: (
      <>
        <p className="mb-2">
          O aplicativo não compartilha seus dados automaticamente. O
          compartilhamento (Exportar) é uma ação exclusivamente iniciada pelo
          usuário.
        </p>
        <p>
          Ao exportar um PDF, você decide para qual plataforma ou contato deseja
          enviar o documento.
        </p>
      </>
    ),
  },
  {
    title: "6. Seus Direitos",
    content: (
      <p>
        Como os dados são armazenados localmente, você tem total controle sobre
        eles. Você pode excluir os documentos a qualquer momento diretamente
        pela interface do aplicativo ou pelo gerenciador de arquivos do seu
        celular.
      </p>
    ),
  },
  {
    title: "7. Alterações nesta Política",
    content: (
      <p>
        Podemos atualizar nossa Política de Privacidade ocasionalmente.
        Recomendamos que você revise esta página periodicamente para quaisquer
        alterações.
      </p>
    ),
  },
  {
    title: "Contato",
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
      </ul>
    ),
  },
];

const features = [
  {
    icon: "📄",
    title: "Digitalização de Documentos",
    description:
      "Digitalize documentos com precisão usando o Google ML Kit Document Scanner.",
  },
  {
    icon: "📱",
    title: "Processamento Local",
    description:
      "Todo o processamento de imagem ocorre no seu dispositivo, sem envio para servidores externos.",
  },
  {
    icon: "🔒",
    title: "100% Privado",
    description:
      "Seus documentos ficam no seu dispositivo. Sem banco de dados em nuvem.",
  },
  {
    icon: "📂",
    title: "Exportação em PDF",
    description:
      "Gera arquivos PDF com nomes exclusivos, salvos no armazenamento interno do dispositivo.",
  },
  {
    icon: "✂️",
    title: "Corte Automático",
    description:
      "Detecção automática de bordas e aprimoramento de imagem para scans nítidos.",
  },
  {
    icon: "📤",
    title: "Compartilhamento Fácil",
    description:
      "Exporte e compartilhe seus PDFs para qualquer plataforma diretamente pelo app.",
  },
];

const ScannerMLKit = () => {
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
                src="./scannermlkit/icon.png"
                alt="Icon App Scanner MLKIT"
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
                Scanner MLKIT
              </GradientText>
            </div>

            <p className="subtitle max-w-2xl">
              Aplicativo Android de digitalização de documentos utilizando o{" "}
              <strong>Google ML Kit Document Scanner</strong>. Digitalize,
              aprimore e exporte seus documentos em PDF diretamente do seu
              dispositivo.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {["Android", "Google ML Kit", "PDF", "Document Scanner", "Kotlin"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-700"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="mt-16 text-center">
            <h2 className="title text-center mb-8">Screenshots</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "./scannermlkit/1.png",
                "./scannermlkit/2.png",
                "./scannermlkit/3.png",
                "./scannermlkit/4.png",
                "./scannermlkit/5.png",
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
              O Scanner MLKIT nasceu para oferecer uma solução simples e
              eficiente de digitalização de documentos. Utilizando o poder do
              Google ML Kit, o app detecta automaticamente bordas, aplica
              correções e gera PDFs de alta qualidade — tudo sem sair do
              dispositivo.
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
              Última atualização: 27 de janeiro de 2026
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
                Este aplicativo foi desenvolvido com foco em privacidade. Seus
                documentos são processados e armazenados exclusivamente no seu
                dispositivo.
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

export default ScannerMLKit;
