import React from "react";
import ProfileImage from '../assets/Foto Portfolio.jpeg'
import '../styles/Profile.css'; 
const Profile = () => {
    return (
        
        <div className="profile">
            <img src={ProfileImage} alt="Minha Foto" className="profile-image"/>
            <div className="profile-info">
                <h2>Sobre Mim: </h2>
                <p>
                Sou um desenvolvedor web especializado em React, 
                com três anos de experiência na criação de soluções modernas e eficientes. 
                Meu trabalho é focado na construção de aplicações performáticas, intuitivas 
                e escaláveis garantindo interfaces de usuário responsivas e uma experiência 
                excepcional.<br/>

                Ao longo da minha trajetória, desenvolvi diversos projetos que evidenciam 
                minha capacidade técnica e meu compromisso com a excelência. Meu portfólio 
                inclui aplicações web dinâmicas, single-page applications (SPAs) e sistemas 
                otimizados para diferentes dispositivos. Utilizo as melhores práticas do
                 mercado, incluindo componentização eficiente, gerenciamento de estado e 
                 integração com APIs, sempre garantindo um código limpo e bem estruturado.
                </p>
            </div>
        </div>
    );
};

export default Profile;
