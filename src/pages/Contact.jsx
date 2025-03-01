import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import { Home } from "lucide-react"; 

import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import "../styles/Contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleWhatsAppClick = () => {
    setMessage("Você será redirecionado para o WhatsApp.");
    setMessageType("info");
  };

  const handleFormSubmit = async (formData) => {
    try {
      const API_URL = import.meta.env.VITE_BACKEND_URL || "/api/contact";


      console.log("🚀 Enviando dados para Backend:", formData);

      const response = await axios.post(API_URL, formData, { 
        headers: { "Content-Type": "application/json" }
      });

      console.log("✅ Resposta do Backend:", response.data);

      if (response.data.success) {
        setMessage("Formulário enviado com sucesso!");
        setMessageType("success");
      } else {
        setMessage("Falha ao salvar os dados.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("❌ Erro ao enviar:", error);
      setMessage("Erro ao salvar os dados.");
      setMessageType("error");
    }
  };

  return (
    <div className="contact">
      <Header />

      <main>
        <Link to="/" className="back-home">
          <Home className="w-5 h-5 inline-block mr-2" /> Home
        </Link>

        <h2>Contato</h2>

        {message && <span className={`message ${messageType}`}>{message}</span>}

        <ContactForm onSubmit={handleFormSubmit} />

        <a href="http://wa.me/5583988660079" target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
          Conversar no WhatsApp
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
