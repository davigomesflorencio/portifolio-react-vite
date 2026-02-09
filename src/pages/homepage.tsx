import React, { useEffect, useState } from "react";

import {
  faGithub,
  faInstagram,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";

import Academic from "../components/homepage/academic";
import INFO from "../data/user";
import Footer from "../components/common/fotter";
import FadeContent from "../components/common/fadeContent";
import GradientText from "../components/common/gradientText";
import Particles from "../components/common/particles";
import LogoLoop, { type LogoItem } from "../components/common/logoLoop";

const Homepage = () => {
  const { t } = useTranslation();
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  const imageLogosMobile = [
    {
      src: "../../assets/mobile/android.png",
      alt: "Android",
      href: "https://android.com",
    },
    {
      src: "../../assets/mobile/apple.png",
      alt: "Apple",
      href: "https://www.apple.com/",
    },
    {
      src: "../../assets/mobile/Dart-Dark 1.png",
      alt: "Dart",
      href: "https://dart.dev",
    },
    {
      src: "../../assets/mobile/Firebase-Dark 1.png",
      alt: "Firebase",
      href: "https://firebase.google.com/",
    },
    {
      src: "../../assets/mobile/Flutter-Dark 1.png",
      alt: "Flutter",
      href: "https://flutter.dev/",
    },
    {
      src: "../../assets/mobile/Idea-Dark 1.png",
      alt: "Idea",
      href: "https://www.jetbrains.com/idea/",
    },
    {
      src: "../../assets/mobile/Java-Dark 1.png",
      alt: "Java",
      href: "https://www.java.com/",
    },
    {
      src: "../../assets/mobile/Kotlin-Dark 1.png",
      alt: "Kotlin",
      href: "https://kotlinlang.org/",
    },
    {
      src: "../../assets/mobile/Ktor-Dark 1.png",
      alt: "Ktor",
      href: "https://ktor.io/",
    },
    {
      src: "../../assets/mobile/Swift 1.png",
      alt: "Swift",
      href: "https://developer.apple.com/swift/",
    },
  ] as LogoItem[];

  const imageLogosFront = [
    {
      src: "../../assets/front/angular.png",
      alt: "Angular",
      href: "https://angular.io/",
    },
    {
      src: "../../assets/front/CSS 1.png",
      alt: "CSS",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      src: "../../assets/front/HTML 1.png",
      alt: "HTML",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      src: "../../assets/front/JavaScript 1.png",
      alt: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      src: "../../assets/front/React-Dark 1.png",
      alt: "React",
      href: "https://reactjs.org/",
    },
    {
      src: "../../assets/front/TypeScript 1.png",
      alt: "TypeScript",
      href: "https://www.typescriptlang.org/",
    },
    {
      src: "../../assets/front/TailwindCSS-Dark 1.png",
      alt: "TailwindCSS",
      href: "https://tailwindcss.com/",
    },
    {
      src: "../../assets/front/Vite-Dark 1.png",
      alt: "Vite",
      href: "https://vitejs.dev/",
    },
  ] as LogoItem[];

  const stackBackEnd = [
    {
      src: "../../assets/back/docker.png",
      alt: "Docker",
      href: "https://www.docker.com/",
    },
    {
      src: "../../assets/back/FastAPI 1.png",
      alt: "FastAPI",
      href: "https://fastapi.tiangolo.com/",
    },
    {
      src: "../../assets/back/Jenkins-Dark 1.png",
      alt: "Jenkins",
      href: "https://jenkins.io/",
    },
    {
      src: "../../assets/back/NodeJS-Dark 1.png",
      alt: "NodeJS",
      href: "https://nodejs.org/",
    },
    {
      src: "../../assets/back/Postman 1.png",
      alt: "Postman",
      href: "https://www.postman.com/",
    },
    {
      src: "../../assets/back/Python-Dark 1.png",
      alt: "Python",
      href: "https://www.python.org/",
    },
    {
      src: "../../assets/back/RabbitMQ-Dark 1.png",
      alt: "RabbitMQ",
      href: "https://www.rabbitmq.com/",
    },
    {
      src: "../../assets/back/Sentry 1.png",
      alt: "Sentry",
      href: "https://sentry.io/",
    },
    {
      src: "../../assets/back/Spring-Dark 1.png",
      alt: "Spring",
      href: "https://spring.io/",
    },
  ] as LogoItem[];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = Math.round(window.pageYOffset);

      const newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
        }
      } else {
        setLogoSize(newLogoSize);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

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
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="flex flex-col items-center w-auto lg:w-auto mt-[150px]">
            <div className="w-[300px] h-[300px] ml-0 lg:ml-0">
              <div className="overflow-hidden rounded-[10%] rotate-3">
                <FadeContent
                  blur={true}
                  duration={1000}
                  ease="ease-out"
                  initialOpacity={0}
                >
                  <img
                    src="home.jpg"
                    alt="about"
                    className="w-full"
                    fetchPriority="high"
                  />
                </FadeContent>
              </div>
            </div>
          </div>

          <div className="pt-[50px]">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-col items-start lg:order-2">
                <div className="title !w-[100%] lg:!w-[100%] mt-5 lg:mt-0 text-center">
                  <GradientText
                    colors={["#258176", "#CF85CD", "#00d3f2"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="custom-class"
                  >
                    {t("homepage.title")}
                  </GradientText>
                </div>

                <div className="subtitle !w-[100%] lg:!w-[100%] mt-[10px] lg:mt-[25px]">
                  {t("homepage.description")}
                </div>

                <div className="title !w-[100%] lg:!w-[100%] mt-5 lg:mt-0 text-center">
                  <a
                    href={INFO.main.cv}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-[20px] px-6 py-3 mt-8 text-sm font-medium text-black dark:text-white bg-cyan-400 rounded-lg hover:bg-secondary transition-all duration-300 shadow-lg"
                  >
                    <FontAwesomeIcon icon={faDownload} className="mr-2" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center w-auto justify-center pt-[30px]">
              <div className="flex justify-between w-auto">
                <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="pr-5 text-[35px] text-secondary hover:text-primary transition-colors duration-200"
                  />
                </a>
                <a
                  href={INFO.socials.stackoverflow}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faStackOverflow}
                    className="pr-5 text-[35px] text-secondary hover:text-primary transition-colors duration-200"
                  />
                </a>
                <a
                  href={INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="pr-5 text-[35px] text-secondary hover:text-primary transition-colors duration-200"
                  />
                </a>
                <a
                  href={`mailto:${INFO.main.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faMailBulk}
                    className="text-[35px] text-secondary hover:text-primary transition-colors duration-200"
                  />
                </a>
              </div>
            </div>

            <div className="w-full mt-10 title text-center">
              <h2>Tecnologias</h2>
            </div>

            <div className="w-full mt-5 subtitle text-center">
              <h3>Stack Mobile</h3>
            </div>

            <div
              style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
              }}
              className="top-20"
            >
              <LogoLoop
                logos={imageLogosMobile}
                speed={100}
                direction="left"
                logoHeight={80}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
              />
            </div>

            <div className="w-full mt-5 subtitle text-center">
              <h3>Stack Front</h3>
            </div>

            <div
              style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
              }}
              className="top-20"
            >
              <LogoLoop
                logos={imageLogosFront}
                speed={100}
                direction="right"
                logoHeight={80}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
              />
            </div>

            <div className="w-full mt-5 subtitle text-center">
              <h3>Stack Backend</h3>
            </div>

            <div
              style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
              }}
              className="top-20"
            >
              <LogoLoop
                logos={stackBackEnd}
                speed={120}
                direction="left"
                logoHeight={80}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
              />
            </div>

            <div className="w-full mt-10 title text-center">
              <h2>{t("homepage.experiences")}</h2>
            </div>

            <div className="flex flex-col lg:flex-row mt-10">
              <div className="flex-1 ml-[30px]">
                <Works />
              </div>

              {/* <div className="flex-1 ml-[30px]">
                <Tecnology />
              </div> */}
            </div>

            <div className="w-full mt-10 mb-10 title text-center">
              <h2>{t("homepage.academic")}</h2>
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 ml-[30px]">
                <Academic />
              </div>
            </div>

            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
