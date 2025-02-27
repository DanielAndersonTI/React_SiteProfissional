// controllers/clienteController.js

const listarClientes = (req, res) => {
    // Aqui você pode adicionar lógica para recuperar os clientes do banco de dados
    res.json([
        { id: 1, nome: 'Cliente 1' },
        { id: 2, nome: 'Cliente 2' },
    ]);
};

const criarCliente = (req, res) => {
    // Aqui você pode adicionar lógica para adicionar um novo cliente no banco de dados
    const novoCliente = req.body; // Você pode pegar os dados do cliente da requisição
    res.status(201).json({ message: 'Cliente criado com sucesso', cliente: novoCliente });
};

module.exports = { listarClientes, criarCliente };
