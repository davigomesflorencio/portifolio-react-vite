import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import Footer from "../components/common/fotter";

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
              <div className="lg:basis-[900px] lg:order-2">
                <div className="title !w-full">{INFO.about.title}</div>

                <div className="subtitle !w-[80%] max-lg:pt-5 dark:text-[#f4f4f5]">
                  Desenvolvedor Pleno com foco em Android e tecnologias móveis,
                  especializado em Kotlin, Java e Flutter.
                  <br />
                  <br />
                  Tenho experiência sólida no desenvolvimento de aplicações
                  nativas para Android e wearables, utilizando Jetpack Compose,
                  MVVM, Retrofit e Samsung Health SDK, além de implementar
                  práticas de CI/CD, monitoramento e análise de dados para
                  garantir alta qualidade e performance.
                  <br />
                  <br />
                  Complemento minha atuação no mobile com desenvolvimento
                  Back-End em Spring Boot (Java) e Python (FastAPI/Flask),
                  criando APIs RESTful escaláveis e microsserviços com Docker e
                  Kubernetes.
                  <br />
                  <br />
                  Possuo conhecimentos em análise de dados com Python,
                  processamento de sinais fisiológicos com NeuroKit e aplicação
                  de Teoria dos Grafos em soluções de conectividade e
                  otimização.
                </div>
              </div>

              <div className="flex flex-col lg:basis-[300px] lg:order-1 mr-9 mb-9">
                <div className="w-[370px] max-sm:w-[80%] pb-10 lg:pb-0">
                  <div className="inline-block overflow-hidden w-full rounded-[10%] rotate-3">
                    <img
                      src="support.png"
                      alt="about"
                      className="block w-full"
                    />
                  </div>
                </div>

                <div className="hidden lg:block pt-[50px] pb-[50px]">
                  <Socials />
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
