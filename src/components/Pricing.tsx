import React from "react";
import "./Pricing.css";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Básico",
      price: "R$49/mês",
      features: ["Respostas rápidas", "Informações atualizadas"],
    },
    {
      name: "Premium",
      price: "R$99/mês",
      features: [
        "Respostas rápidas",
        "Informações atualizadas",
        "Assistência em documentos",
        "Suporte 24/7",
      ],
    },
  ];

  return (
    <section id="pricing">
      <h2>Preços</h2>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-plan">
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href="#" className="cta-button">
              Assinar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
