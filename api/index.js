require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors()); // 🔹 Permite requisições do frontend

// 🔹 URL do Webhook do Google Apps Script (Atualize se necessário)
const GOOGLE_SHEETS_WEBHOOK = "https://script.google.com/macros/s/AKfycbxPEsPaPeyQi-4xWbz-HcGdigsGbOKGUPTZez1z6KFvD9MIgGUQSPm0rrBbBZmXhsHMbQ/exec";

// 🔹 Rota para receber os dados do formulário e enviar para o Google Sheets
app.post("/api/contact", async (req, res) => {
  try {
    console.log("📩 Recebendo dados do formulário:", req.body);

    const response = await axios.post(GOOGLE_SHEETS_WEBHOOK, req.body, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("✅ Resposta do Webhook:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("❌ Erro ao enviar para o Webhook:", error);
    res.status(500).json({ success: false, message: "Erro ao enviar os dados para o Google Sheets" });
  }
});

// 🔹 Exporta o app (necessário para a Vercel)
module.exports = app;
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
});

