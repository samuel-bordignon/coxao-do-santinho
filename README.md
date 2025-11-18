
---

# CrossFit Coxao do Santinho - Controle de Equipamentos

Aplicação full-stack para gerenciar os equipamentos do box CrossFit Coxao do Santinho. O projeto cobre autenticacao da equipe, cadastro de itens, controle de saldo e registro de movimentacoes de entrada e saida.

## Ambiente de referencia

- Desenvolvido e validado em Windows 11 Pro 23H2 (build 22631)
- Node.js 18+
- PostgreSQL 14+

## Estrutura do repositorio

```
coxao-do-santinho/
├── backend/      # API REST Node + Express + PostgreSQL
├── front/        # SPA React + Axios + Vite
└── README.md           # Visao geral (este arquivo)
```

## Tecnologias principais

- Node.js
- Express
- PostgreSQL
- React
- Vite
- Axios

## Funcionalidades

- Login da equipe do box
- Cadastro, edicao e exclusao de equipamentos
- Busca por nome (`/materiais?q=`) com ordenacao em ordem alfabetica
- Registro de movimentacoes de entrada e saida
- Alerta de estoque abaixo do minimo configurado

## Como executar

```bash
git clone https://github.com/seu-usuario/template-crud-meias.git
cd template-crud-meias

# Backend
cd backend-meias
npm install
node server.js

# Frontend (novo terminal)
cd ../front-meias
npm install
npm run dev
```

- Backend: http://localhost:3000
- Frontend: http://localhost:5173

## Documentacao complementar

- backend-meias/readme.md: detalhes da API e configuracao do banco
- front-meias/README.md: guia da SPA e integracao com o backend


