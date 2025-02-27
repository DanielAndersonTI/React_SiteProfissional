import React from "react";
import { Link } from "react-router-dom"; // Importação correta do Link
import { Home, Phone } from "lucide-react"; // Importação correta do ícone

import Header from "../components/Header";
import Profile from "../components/Profile";
import Links from "../components/Links";
import Footer from "../components/Footer";

import "../styles/Home.css"; // Importação do CSS

const HomePage = () => {
  return (
    <div className="home">
      <Header />

      {/* 🔽 Barra de navegação com os botões */}
      <nav className="top-nav">
        <ul>
          <li>
            <Link to="/">
              <Home className="w-5 h-5 inline-block mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link to="/contact">
            <Phone className="w-5 h-5 inline-block mr-2"/>Contato</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Profile />
        <Links />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
