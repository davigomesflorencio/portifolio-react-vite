import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../components/common/navBar";

import ContactForm from "../components/contact/contactForm";
import INFO from "../data/user";
import Footer from "../components/common/fotter";
import Particles from "../components/common/particles";

const Contact = () => {
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
            height: "20%",
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
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="flex flex-col justify-around mt-[120px] mb-9 dark:text-[#f4f4f5]">
            <div className="title !w-full text-center">
              {t("contact.title")}
            </div>

            <div className="subtitle !w-full">
              {t("contact.description")}
              <a
                href={`mailto:${INFO.main.email}`}
                className="text-secondary hover:text-primary transition-colors duration-200"
              >
                {INFO.main.email}
              </a>
              .
              <br />
              <br />
              {t("contact.alternative")}
              <ContactForm />
            </div>
          </div>

          <div className="page-footer ">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
