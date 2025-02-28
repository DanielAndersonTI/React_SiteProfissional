import React from "react";
import '../styles/Links.css';
import linkedinIcon from '../assets/Linkedin_temp.png';  // Caminho correto para o LinkedIn
import githubIcon from '../assets/github.jpg';  // Caminho correto para o GitHub

const Links = () => {
    return (
        <div className="links">
            <a href="https://www.linkedin.com/in/daniel-anderson-275379296/" 
             target="_blank" rel="noopener noreferrer" className="link-btn">
                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                LinkedIn
            </a>

            <a href="https://github.com/DanielAndersonTI?tab=repositories" 
             target="_blank" rel="noopener noreferrer" className="link-btn">
                <img src={githubIcon} alt="GitHub" className="icon" />
                GitHub
            </a> 
        </div>
    );
};

export default Links;
