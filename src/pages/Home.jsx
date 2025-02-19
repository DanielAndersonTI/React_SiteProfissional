import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Links from '../components/Links';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
        <Header />
        <main>
            <Profile />
            <Links />
        </main>
        <Footer />
    </div> 
  );
};

export default Home;
