import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import NavBar from "../components/common/navBar";
import Socials from "../components/about/socials";

import Footer from "../components/common/fotter";
import Stack from "../components/about/stack";
import WearableStack from "../components/about/wearable_stack";
import ComplementStack from "../components/about/complement_stack";
import AnalistStack from "../components/about/analist_stack";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Particles from "../components/common/particles";

const position: [number, number] = [-4.979116, -39.056291];

const About = () => {
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
            height: "50vh",
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
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="flex flex-col h-full m-0 pt-[120px] max-sm:pt-[60px] ">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-full">
                <div className="title !w-full text-center">
                  {t("about.title")}
                </div>

                <div className="subtitle !w-full max-lg:pt-5 dark:text-[#f4f4f5]">
                  {t("about.greeting")}
                  <div className="w-full h-[440px] mt-10">
                    <MapContainer
                      center={position}
                      zoom={15}
                      scrollWheelZoom={false}
                      style={{ height: "100%", width: "100%" }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={position}>
                        <Popup>{t("about.map_popup")}</Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                  <br />
                  <br />
                  {t("about.intro_mobile")}
                  <Stack />
                  <br />
                  <br />
                  {t("about.experience_android")}
                  <WearableStack />
                  <br />
                  <br />
                  {t("about.experience_backend")}
                  <ComplementStack />
                  <br />
                  <br />
                  {t("about.experience_data")}
                  <AnalistStack />
                </div>
              </div>
            </div>
            <div className="lg:hidden pt-[30px] flex">
              <Socials />
            </div>
          </div>
          <div className="page-footer mt-9">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
