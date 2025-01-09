import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>ChatADV</h1>
        <p>Seu Assistente Jurídico Inteligente.</p>
        <a href="#pricing" className="cta-button">
          Experimente Agora
        </a>
      </div>
    </section>
  );
};

export default Hero;
