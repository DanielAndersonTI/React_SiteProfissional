require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Configuração do CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Configuração do transporte de e-mail via SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Rota para envio de e-mail
app.post('/api/contact', async (req, res) => {
  console.log("📩 Recebendo dados do formulário:", req.body);

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios!' });
  }

  // Configurando o e-mail para parecer enviado pelo próprio usuário
  const mailOptions = {
    from: `${name} <${email}>`, // 🔴 O remetente será o próprio usuário que enviou o formulário
    to: process.env.EMAIL_USER, // Seu e-mail onde deseja receber a mensagem
    subject: `Novo contato de ${name}`,
    text: `Você recebeu uma mensagem do formulário de contato.\n\nNome: ${name}\nE-mail: ${email}\nMensagem: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email enviado com sucesso!");
    res.status(200).json({ success: true, message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    res.status(500).json({ success: false, message: 'Erro ao enviar email.', error: error.message });
  }
});

// Inicializa o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
