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
        O <strong>Face Detector DF MLKit</strong> é um aplicativo que utiliza o{" "}
        <strong>ML Kit do Google</strong> para detecção de rostos em tempo real.
        Esta política descreve como seus dados são tratados, garantindo
        transparência, segurança e conformidade com as diretrizes do Google e
        leis de privacidade aplicáveis.
      </p>
    ),
  },
  {
    title: "2. Coleta e Processamento de Dados",
    content: (
      <>
        <p className="font-semibold mb-2">2.1 Processamento pelo ML Kit</p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>
            A detecção de rostos ocorre inteiramente no dispositivo (on-device).
          </li>
          <li>
            Nenhuma imagem, vídeo ou dado facial é enviado a servidores
            externos.
          </li>
          <li>Os dados processados não são armazenados após o uso.</li>
        </ul>

        <p className="font-semibold mb-2">2.2 Permissões Requeridas</p>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  Câmera
                </td>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  Captura de vídeo em tempo real para detecção facial.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  Internet (Opcional)
                </td>
                <td className="border border-gray-300 dark:border-zinc-600 px-3 py-2">
                  Atualizações do app e análises de uso (Firebase Analytics, se
                  aplicável).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-semibold mb-2">2.3 Dados Opcionais</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Dados de diagnóstico (logs):</strong> Coletados apenas com
            consentimento para melhorias no app.
          </li>
          <li>
            <strong>Metadados do dispositivo (modelo, SO):</strong> Usados para
            otimização de desempenho.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Uso dos Dados",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Funcionalidade principal:</strong> Detecção facial 100% local,
          sem envio de dados a terceiros.
        </li>
        <li>
          <strong>Melhorias no app:</strong> Análise de erros e desempenho
          (dados anônimos agregados).
        </li>
        <li>
          Nenhum dado facial ou imagem é compartilhado, vendido ou utilizado
          para identificação pessoal.
        </li>
      </ul>
    ),
  },
  {
    title: "4. Compartilhamento de Dados",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Zero compartilhamento</strong> de imagens, vídeos ou dados
          faciais.
        </li>
        <li>
          Dados agregados e anônimos (estatísticas de uso) podem ser utilizados
          para análises (ex.: Firebase Analytics).
        </li>
      </ul>
    ),
  },
  {
    title: "5. Segurança",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Processamento offline:</strong> Todo o reconhecimento ocorre
          no dispositivo.
        </li>
        <li>
          <strong>Armazenamento local (opcional):</strong> Se o usuário salvar
          imagens, elas ficam restritas ao dispositivo.
        </li>
        <li>
          Sem coleta de dados biométricos (pontos faciais, geometria do rosto,
          etc.).
        </li>
      </ul>
    ),
  },
  {
    title: "6. Alterações na Política",
    content: (
      <>
        <p className="mb-2">Mudanças serão comunicadas via:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Notificação no app.</li>
          <li>Aviso nesta página.</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Seus Direitos",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          Revogar permissões a qualquer momento (via configurações do
          dispositivo).
        </li>
        <li>
          Solicitar exclusão de dados (se aplicável, para logs ou imagens
          salvas).
        </li>
      </ul>
    ),
  },
  {
    title: "8. Contato",
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
    icon: "🎯",
    title: "Detecção em Tempo Real",
    description:
      "Detecta rostos em tempo real usando a câmera do dispositivo com alta precisão.",
  },
  {
    icon: "📱",
    title: "Processamento On-Device",
    description:
      "Todo o processamento ocorre localmente no dispositivo, sem envio de dados para servidores.",
  },
  {
    icon: "🔒",
    title: "100% Privado",
    description:
      "Nenhuma imagem ou dado facial é armazenado ou compartilhado. Seus dados são seus.",
  },
  {
    icon: "⚡",
    title: "Alta Performance",
    description:
      "Powered by Google ML Kit para detecção rápida e eficiente mesmo em dispositivos de entrada.",
  },
  {
    icon: "🚫",
    title: "Sem Biometria",
    description:
      "Não coleta pontos faciais, geometria do rosto ou qualquer dado biométrico identificável.",
  },
  {
    icon: "🤖",
    title: "Google ML Kit",
    description:
      "Utiliza a API de detecção facial do Google ML Kit, referência em machine learning mobile.",
  },
];

const FaceDetector = () => {
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
                src="./facedetector/icon.png"
                alt="Icon App Face Detector"
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
                Face Detector DF MLKit
              </GradientText>
            </div>

            <p className="subtitle max-w-2xl">
              Aplicativo Android de detecção facial em tempo real utilizando o{" "}
              <strong>Google ML Kit</strong>. Detecte rostos com alta precisão
              diretamente no seu dispositivo, sem envio de dados para servidores
              externos.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                "Android",
                "Google ML Kit",
                "Face Detection",
                "Real-time",
                "Kotlin",
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
                href="https://play.google.com/store/apps/details?id=com.davi.dev.face_detect_scan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-black dark:text-white bg-cyan-400 hover:bg-cyan-500 rounded-lg transition-all duration-300 shadow-lg"
              >
                Ver na Play Store
              </a>
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="mt-16 text-center">
            <h2 className="title text-center mb-8">Screenshots</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "./facedetector/1.png",
                "./facedetector/2.png",
                "./facedetector/3.png",
                "./facedetector/4.png",
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
              O Face Detector DF MLKit foi desenvolvido para demonstrar o poder
              do Google ML Kit na detecção facial em tempo real. Com
              processamento totalmente local, o app oferece privacidade total ao
              usuário enquanto entrega resultados precisos e rápidos.
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
              Última atualização: 07 de junho de 2025
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
                dado facial ou imagem sai do seu dispositivo sem sua autorização
                explícita.
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

export default FaceDetector;
