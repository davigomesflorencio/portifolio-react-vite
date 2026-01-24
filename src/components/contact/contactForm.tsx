import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus("loading");
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error: { text: string }) => {
          console.error("Erro ao enviar e-mail:", error.text);
          console.error("Erro ao enviar e-mail:", error);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        },
      );
  };

  return (
    <div className="w-full max-w-[600px] mt-10">
      <form ref={form} className="flex flex-col gap-5" onSubmit={sendEmail}>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-[0.9rem] font-medium text-primary dark:text-[#f4f4f5]"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Seu nome"
            required
            className="p-3 border border-quaternary rounded-lg bg-transparent text-primary dark:text-[#f4f4f5] transition-colors focus:outline-none focus:border-accent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-[0.9rem] font-medium text-primary dark:text-[#f4f4f5]"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="seu@email.com"
            required
            className="p-3 border border-quaternary rounded-lg bg-transparent text-primary dark:text-[#f4f4f5] transition-colors focus:outline-none focus:border-accent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-[0.9rem] font-medium text-primary dark:text-[#f4f4f5]"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Como posso ajudar?"
            rows={5}
            required
            className="p-3 border border-quaternary rounded-lg bg-transparent text-primary dark:text-[#f4f4f5] transition-colors focus:outline-none focus:border-accent"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`px-6 py-3 text-white dark:text-black border-none rounded-lg font-semibold cursor-pointer self-start transition-all hover:bg-secondary hover:-translate-y-0.5 active:translate-y-0 max-sm:w-full ${
            status === "loading" ? "bg-secondary opacity-70" : "bg-primary"
          }`}
        >
          {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
        </button>

        {status === "success" && (
          <p className="text-green-500 font-medium">
            Mensagem enviada com sucesso! Entrarei em contato em breve.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 font-medium">
            Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
