import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../components/common/navBar";
import AllApps from "../components/playstore/allApps";
import Footer from "../components/common/fotter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import Particles from "../components/common/particles";

const PlayStore = () => {
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
        <NavBar active="playstore" />
        <div className="content-wrapper">
          <div className="flex flex-col h-full m-0 pt-[120px]">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-[#fafafa] dark:bg-[#27272a] rounded-full shadow-md mb-2">
                <FontAwesomeIcon
                  icon={faGooglePlay}
                  className="text-accent text-3xl"
                />
              </div>
              <div className="title w-full!">{t("playstore.title")}</div>
              <div className="subtitle w-full!">
                {t("playstore.description")}
              </div>
            </div>

            <div className="pt-10">
              <AllApps />
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

export default PlayStore;
