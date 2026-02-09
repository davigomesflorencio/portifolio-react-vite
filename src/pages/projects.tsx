import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import Footer from "../components/common/fotter";
import Particles from "../components/common/particles";

const Projects = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <div
          style={{
            width: "100%",
            height: "30vh",
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
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="flex flex-col h-full m-0 pt-[120px]">
            <div className="title !w-full text-center">
              {t("projects.title")}
            </div>

            <div className="pt-10">
              <AllProjects />
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

export default Projects;
