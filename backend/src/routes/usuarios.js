const express = require('express')
const { Pool } = require('pg');
const router = express.Router()
const pool = new Pool({
  user: 'postgres',            // <-- ajuste aqui
  password: 'KWlu3155',        // <-- ajuste aqui
  host: 'localhost',
  port: 5432,
  database: 'saep_db',         // banco exigido pela prova
})

const ok = (res, data) => res.json(data);
const fail = (res, err, code = 500) => {
  console.error(err);
  res.status(code).json({ error: typeof err === 'string' ? err : 'Erro interno' });
};

// Rota para obter todos os usuários
router.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuario')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao obter usuários' })
  }
})
router.get('/login', async (req, res) => {
  const { email, senha } = req.body
  if (!email || !senha) return fail(res, "Campos obrigatórios: Senha e Email", 400)
  try {
    const res = await pool.query(
      'SELECT id, nome, email FROM usuarios WHERE email=$1 AND senha=$2',
      [email, senha]
    );
    if (res.rows === 0) return fail(res, "Eemail não cadastrado", 400)
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao obter usuários' })
  }
})

module.exports = router