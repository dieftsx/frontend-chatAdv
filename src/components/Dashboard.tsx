import React from "react";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <section className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats">
        <div className="stat">
          <h3>Usuários Ativos</h3>
          <p>150</p>
        </div>
        <div className="stat">
          <h3>Consultas Realizadas</h3>
          <p>1200</p>
        </div>
        <div className="stat">
          <h3>Documentos Gerados</h3>
          <p>300</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
