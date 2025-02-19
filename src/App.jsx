import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './styles/App.css';
import ClientesList from './ClientesList';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clientes" element={<ClientesList/>}/>
      </Routes>
    </Router>
  );
};

export default App;
