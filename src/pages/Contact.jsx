import React, { useState } from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleWhatsAppClick = () => {
    setMessage('Você será redirecionado para o WhatsApp.');
    setMessageType('info');
  };

  const handleFormSubmit = (feedbackMessage, feedbackType) => {
    setMessage(feedbackMessage);
    setMessageType(feedbackType);
  };

  return (
    <div className="contact">
      <Header />
      <main>
        <h2>Contato</h2>
        {message && (
          <span className={`message ${messageType}`}>
            {message}
          </span>
        )}
        <ContactForm onSubmit={handleFormSubmit} />
        <a
          href="http://wa.me/5583988660079"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
        >
          Conversar no WhatsApp
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
