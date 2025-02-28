const nodemailer = require('nodemailer');

// Configurar transporte de e-mail
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Corrigido para usar o serviço correto, se estiver usando Gmail
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Função para listar clientes (simulada)
exports.listarClientes = (req, res) => {
  res.json([
    { id: 1, nome: 'John Doe' },
    { id: 2, nome: 'Jane Doe' },
  ]);
};

// Função para criar um novo cliente e enviar e-mail
exports.criarCliente = (req, res) => {
  const { nome, telefone, email, mensagem } = req.body;

  if (!nome || !telefone || !email || !mensagem) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' }); // Corrigido para validação adequada
  }

  // Configurar e-mail
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, 
    subject: 'Nova informação do cliente',
    text: `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${mensagem}`,
  };

  // Enviar e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      return res.status(500).json({ error: 'Erro ao enviar e-mail' });
    }
    console.log('E-mail enviado:', info.response);
    res.status(200).json({ message: 'Informações enviadas com sucesso!' });
  });
};
