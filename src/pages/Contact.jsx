import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Header />

      <main>
        <Link to="/" className="back-home">
          <Home className="w-5 h-5 inline-block mr-2" /> Back to page Home
        </Link>

        <h2>Se desejar fazer um orçamento ou tirar alguma dúvida sobre um projeto futuro, 
        entre em contato pelo WhatsApp clicando no link abaixo:</h2>

        <a 
          href="https://wa.me/5583988660079" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-link"
        >
          Conversar no WhatsApp
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
