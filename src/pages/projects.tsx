import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import Footer from "../components/common/fotter";
import Particles from "../components/common/particles";
import DomeGallery, { type ImageItem } from "../components/common/domeGallery";
import ClickSpark from "../components/common/clickSpark";

const Projects = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageDome: ImageItem[] = [
    {
      src: "./mobile/android.png",
      alt: "Android",
    },
    {
      src: "./mobile/apple.png",
      alt: "Apple",
    },
    {
      src: "./mobile/Dart-Dark 1.png",
      alt: "Dart",
    },
    {
      src: "./mobile/Firebase-Dark 1.png",
      alt: "Firebase",
    },
    {
      src: "./mobile/Flutter-Dark 1.png",
      alt: "Flutter",
    },
    {
      src: "./mobile/Idea-Dark 1.png",
      alt: "Idea",
    },
    {
      src: "./mobile/Java-Dark 1.png",
      alt: "Java",
    },
    {
      src: "./mobile/Kotlin-Dark 1.png",
      alt: "Kotlin",
    },
    {
      src: "./mobile/Ktor-Dark 1.png",
      alt: "Ktor",
    },
    {
      src: "./mobile/Swift 1.png",
      alt: "Swift",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <div
          style={{
            width: "100%",
            height: "800px",
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
        <div style={{ width: "100vw", height: "80vh" }}>
          <DomeGallery
            images={imageDome}
            fit={0.6}
            minRadius={300}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={4}
            grayscale={false}
          />
        </div>
        <NavBar active="projects" />
        <div className="content-wrapper">
          <ClickSpark
            sparkColor="#00d3f2"
            sparkSize={10}
            sparkRadius={25}
            sparkCount={8}
            duration={400}
          >
            <div className="flex flex-col h-full m-0 pt-[120px]">
              <div className="title !w-full text-center">
                {t("projects.title")}
              </div>

              <div className="pt-10">
                <AllProjects />
              </div>
            </div>
          </ClickSpark>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
