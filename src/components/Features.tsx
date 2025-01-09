import React from "react";
import "./Features.css";
import Feature from "./Feature";

const Features: React.FC = () => {
  const features = [
    {
      title: "Tire Dúvidas Jurídicas",
      description:
        "Obtenha respostas rápidas para suas dúvidas jurídicas diretamente no WhatsApp.",
    },
    {
      title: "Informações Jurídicas Atualizadas",
      description:
        "Receba as últimas atualizações de leis e regulamentações brasileiras.",
    },
    {
      title: "Assistência na Preparação de Documentos",
      description: "Crie e formate documentos legais com facilidade.",
    },
    {
      title: "Suporte 24/7",
      description:
        "Disponível a qualquer momento, permitindo que você trabalhe no seu próprio ritmo.",
    },
  ];

  return (
    <section id="features">
      <h2>Funcionalidades</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
