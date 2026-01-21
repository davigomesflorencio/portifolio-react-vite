import { useEffect } from "react";
import { TRACKING_ID } from "./data/tracking";
import ReactGA from "react-ga4";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Notfound from "./pages/404";
import Contact from "./pages/contact";
import PlayStore from "./pages/playstore";

export default function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/playstore" element={<PlayStore />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}
