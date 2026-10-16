import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useSeo from "../components/common/useSeo";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import Footer from "../components/common/fotter";
import Particles from "../components/common/particles";
import DomeGallery, { type ImageItem } from "../components/common/domeGallery";
import ClickSpark from "../components/common/clickSpark";

const Projects = () => {
  const { t } = useTranslation();
  useSeo(t("seo.projects.title"), t("seo.projects.description"), "/projects");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageDome: ImageItem[] = [
    {
      src: "/mobile/android.webp",
      alt: "Android",
    },
    {
      src: "/mobile/apple.webp",
      alt: "Apple",
    },
    {
      src: "/mobile/dart.webp",
      alt: "Dart",
    },
    {
      src: "/mobile/firebase.webp",
      alt: "Firebase",
    },
    {
      src: "/mobile/flutter.webp",
      alt: "Flutter",
    },
    {
      src: "/mobile/idea.webp",
      alt: "Idea",
    },
    {
      src: "/mobile/java.webp",
      alt: "Java",
    },
    {
      src: "/mobile/kotlin.webp",
      alt: "Kotlin",
    },
    {
      src: "/mobile/ktor.webp",
      alt: "Ktor",
    },
    {
      src: "/mobile/swift.webp",
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
              <h1 className="title !w-full text-center">
                {t("projects.title")}
              </h1>

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
