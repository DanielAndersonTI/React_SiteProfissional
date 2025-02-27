import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"; // Criamos um novo arquivo de estilo

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/contact">📞 Contato</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
