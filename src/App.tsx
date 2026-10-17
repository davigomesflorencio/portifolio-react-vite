import { lazy, Suspense, useEffect } from "react";
import { TRACKING_ID } from "./data/tracking";
import { Route, Routes } from "react-router-dom";

// O Google Analytics (react-ga4 + gtag.js, ~190 KB) não é necessário para mostrar a
// página: carrega na primeira interação ou 5 s depois do load, o que vier antes.
const GA_EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
const GA_FALLBACK_DELAY_MS = 5000;

// Cada página vira um chunk separado: a home não baixa Leaflet, EmailJS etc.
const Homepage = lazy(() => import("./pages/homepage"));
const About = lazy(() => import("./pages/about"));
const Projects = lazy(() => import("./pages/projects"));
const Notfound = lazy(() => import("./pages/404"));
const Contact = lazy(() => import("./pages/contact"));
const PlayStore = lazy(() => import("./pages/playstore"));
const ScreenshotGnix = lazy(() => import("./pages/screenshotgnix"));
const ScannerMLKit = lazy(() => import("./pages/scannermlkit"));
const FaceDetector = lazy(() => import("./pages/facedetector"));

export default function App() {
  useEffect(() => {
    let timer: number | undefined;

    const cleanup = () => {
      GA_EVENTS.forEach((e) => window.removeEventListener(e, loadAnalytics));
      window.removeEventListener("load", startTimer);
      window.clearTimeout(timer);
    };

    function loadAnalytics() {
      cleanup();
      import("react-ga4").then(({ default: ReactGA }) => ReactGA.initialize(TRACKING_ID));
    }

    function startTimer() {
      timer = window.setTimeout(loadAnalytics, GA_FALLBACK_DELAY_MS);
    }

    GA_EVENTS.forEach((e) => window.addEventListener(e, loadAnalytics, { passive: true }));
    if (document.readyState === "complete") startTimer();
    else window.addEventListener("load", startTimer);

    return cleanup;
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/playstore" element={<PlayStore />} />
          <Route path="/screenshot" element={<ScreenshotGnix />} />
          <Route path="/scanner-mlkit" element={<ScannerMLKit />} />
          <Route path="/facedetector-mlkit" element={<FaceDetector />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
