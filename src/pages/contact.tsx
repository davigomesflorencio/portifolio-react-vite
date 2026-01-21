import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";

import ContactForm from "../components/contact/contactForm";
import INFO from "../data/user";
import Footer from "../components/common/fotter";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="flex flex-col justify-around mt-[120px] mb-9 dark:text-[#f4f4f5]">
            <div className="title !w-full">
              Formas de entrar em contato comigo
            </div>

            <div className="subtitle !w-full">
              Agradeço seus comentários, perguntas e sugestões. Se você tiver
              alguma pergunta ou comentário específico, sinta-se à vontade para
              me enviar um e-mail diretamente para {" "}
              <a
                href={`mailto:${INFO.main.email}`}
                className="text-secondary hover:text-primary transition-colors duration-200"
              >
                {INFO.main.email}
              </a>
              .
              <br />
              <br />
              Como alternativa, você pode usar o formulário de contato em meu
              site para entrar em contato. Basta preencher os campos
              obrigatórios e entrarei em contato o mais breve possível.
              <ContactForm />
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

export default Contact;
