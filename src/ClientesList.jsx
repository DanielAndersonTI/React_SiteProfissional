import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientesList = () => {
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState(null);

  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/clientes'); // Corrigida a porta
      setClientes(response.data);
    } catch (err) {
      setError('Erro ao carregar os clientes');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      {error && <p>{error}</p>}
      <ul>
        {clientes.length > 0 ? (
          clientes.map(cliente => (
            <li key={cliente.id}>{cliente.nome}</li>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </ul>
    </div>
  );
};

export default ClientesList;
