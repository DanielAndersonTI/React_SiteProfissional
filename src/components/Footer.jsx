import React from "react";
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Daniel Anderson. Todos os direitos reservados.</p>
        </footer>
    );
};
export default Footer;

