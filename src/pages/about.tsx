import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import Footer from "../components/common/fotter";
import Stack from "../components/about/stack";
import WearableStack from "../components/about/wearable_stack";
import ComplementStack from "../components/about/complement_stack";
import AnalistStack from "../components/about/analist_stack";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [-4.979116, -39.056291];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="flex flex-col h-full m-0 pt-[120px] max-sm:pt-[60px] ">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-full">
                <div className="title !w-full text-center">
                  {INFO.about.title}
                </div>

                <div className="subtitle !w-full max-lg:pt-5 dark:text-[#f4f4f5]">
                  Meu nome é Davi Gomes Florencio e sou Técnico em informática
                  na EEEP Capelão Frei Orlando e Graduado em Ciência da
                  Computação na Universidade Federal do Ceará Campus Quixadá,
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
                        <Popup>
                          UFC Campus Quixadá <br /> Onde minha jornada acadêmica
                          se consolidou.
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                  <br />
                  <br />
                  Sou Desenvolvedor Pleno com foco em Android, IOS e tecnologias
                  móveis, especializado em Kotlin, Java e Flutter.
                  <Stack />
                  <br />
                  <br />
                  Tenho experiência sólida no desenvolvimento de aplicações
                  nativas para Android e wearables, utilizando Jetpack Compose,
                  MVVM, Retrofit e Samsung Health SDK, além de implementar
                  práticas de CI/CD, monitoramento e análise de dados para
                  garantir alta qualidade e performance.
                  <WearableStack />
                  <br />
                  <br />
                  Complemento minha atuação no mobile com desenvolvimento
                  Back-End em Spring Boot (Java) e Python (FastAPI/Flask),
                  criando APIs RESTful escaláveis e microsserviços com Docker e
                  Kubernetes.
                  <ComplementStack />
                  <br />
                  <br />
                  Possuo conhecimentos em análise de dados com Python,
                  processamento de sinais fisiológicos com NeuroKit e aplicação
                  de Teoria dos Grafos em soluções de conectividade e
                  otimização.
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
