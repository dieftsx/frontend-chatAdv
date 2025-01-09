import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="ChatADV Logo" className="logo" />
        <ul>
          <li>
            <a href="#features">Funcionalidades</a>
          </li>
          <li>
            <a href="#pricing">Preços</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
