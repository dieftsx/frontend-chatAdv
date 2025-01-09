import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <ContactForm />
      <Chat />
      <Dashboard />
      <Footer />
    </>
  );
};

export default App;
