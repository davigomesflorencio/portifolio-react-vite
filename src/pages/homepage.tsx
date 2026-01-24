import React, { useEffect, useState } from "react";

import {
  faGithub,
  faInstagram,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";

import Academic from "../components/homepage/academic";
import Tecnology from "../components/homepage/tecnnology";
import INFO from "../data/user";
import Footer from "../components/common/fotter";

const Homepage = () => {
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

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
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="flex flex-col items-center w-auto lg:w-auto mt-[150px]">
            <div className="w-[300px] h-[300px] ml-0 lg:ml-0">
              <div className="overflow-hidden rounded-[10%] rotate-3">
                <img src="home.jpg" alt="about" className="w-full" />
              </div>
            </div>
          </div>

          <div className="pt-[50px]">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-col items-start lg:order-2">
                <div className="title !w-[100%] lg:!w-[100%] mt-5 lg:mt-0 text-center">
                  {INFO.homepage.title}
                </div>

                <div className="subtitle !w-[100%] lg:!w-[100%] mt-[10px] lg:mt-[25px]">
                  {INFO.homepage.description}
                </div>

                <div className="title !w-[100%] lg:!w-[100%] mt-5 lg:mt-0 text-center">
                  <a
                    href={INFO.main.cv}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-[20px] px-6 py-3 mt-8 text-sm font-medium text-white dark:text-black bg-primary rounded-lg hover:bg-secondary transition-all duration-300 shadow-lg"
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
              <h2>Experiências profissionais</h2>
            </div>

            <div className="flex flex-col lg:flex-row mt-10">
              <div className="flex-1 ml-[30px]">
                <Works />
              </div>

              <div className="flex-1 ml-[30px]">
                <Tecnology />
              </div>
            </div>

            <div className="w-full mt-10 mb-10 title text-center">
              <h2>Formação acadêmica</h2>
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
