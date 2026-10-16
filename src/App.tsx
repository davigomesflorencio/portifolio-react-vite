import { lazy, Suspense, useEffect } from "react";
import { TRACKING_ID } from "./data/tracking";
import ReactGA from "react-ga4";
import { Route, Routes } from "react-router-dom";

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
    ReactGA.initialize(TRACKING_ID);
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
