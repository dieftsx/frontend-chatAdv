import React from "react";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contato</h2>
      <form>
        <input type="text" name="name" placeholder="Nome" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Mensagem" required></textarea>
        <button type="submit" className="cta-button">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
