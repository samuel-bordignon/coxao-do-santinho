// server.js — mini backend "meia meia meia" (Prova SAEP)
// npm i express cors pg
const express = require('express');
const cors = require('cors');
const clientes = require('./routes/usuarios')


const app = express();

app.use(cors());
app.use(express.json());
app.use('/', clientes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
