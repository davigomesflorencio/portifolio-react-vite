import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import AllApps from "../components/playstore/allApps";
import Footer from "../components/common/fotter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const PlayStore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
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
              <div className="title w-full!">Meus Apps na Google Play</div>
              <div className="subtitle w-full!">
                Sempre buscando inovar no desenvolvimento mobile, aqui estão
                meus aplicativos publicados na Google Play Store, com foco
                especial em Wear OS e ferramentas de IA.
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
