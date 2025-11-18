# Descritivo de Casos de Teste - CrossFit Coxao do Santinho

Sistema alvo: SPA de controle de equipamentos integrada a API REST exposta em `http://localhost:3000`.

## Convencoes
- **Pre-condicoes**: estado inicial necessario.
- **Passos**: sequencia manual a executar.
- **Resultado esperado**: comportamento esperado ao final do teste.
- **Resultado obtido**: status simulado com data de 2025-11-17.
- **Dados de exemplo**: massa sugerida para reproducao.

## 1. Autenticacao

### TC-01 - Login com credenciais validas
- Pre-condicoes: usuario existente com email e senha validos.
- Passos:
  1. Abrir a aplicacao.
  2. Informar email valido em "Login da Equipe".
  3. Informar senha valida.
  4. Clicar em "Entrar".
- Resultado esperado: navegacao para "Bem-vindo ao box" exibindo o nome do usuario.
- Resultado obtido: **Aprovado** — Simulado em 2025-11-17 com usuario `ana@example.com`; redirecionamento e saudacao confirmados.

### TC-02 - Login com credenciais invalidas
- Pre-condicoes: nenhuma.
- Passos:
  1. Informar email ou senha incorretos.
  2. Clicar em "Entrar".
- Resultado esperado: alerta com mensagem de falha e permanencia no login.
- Resultado obtido: **Aprovado** — Simulado em 2025-11-17 usando senha incorreta; API retornou 401 e alerta "Falha no login" exibido.

## 2. Navegacao principal

### TC-03 - Acesso ao cadastro de equipamentos
- Pre-condicoes: usuario autenticado.
- Passos:
  1. Clicar em "Cadastro de Equipamentos".
- Resultado esperado: exibicao do formulario de cadastro, lista e barra de busca.
- Resultado obtido: **Aprovado** — Simulado em 2025-11-17; tela carregou lista ordenada e botoes de acao.

### TC-04 - Acesso ao fluxo de equipamentos
- Pre-condicoes: usuario autenticado.
- Passos:
  1. Clicar em "Fluxo de Equipamentos".
- Resultado esperado: exibicao da lista alfabetica e formulario de movimentacao.
- Resultado obtido: **Aprovado** — Simulado em 2025-11-17; componentes renderizados e dados sincronizados via `carregarProdutos()`.

## 3. Cadastro de equipamentos

### TC-05 - Cadastro com dados validos
- Pre-condicoes: autenticacao concluida; equipamento ainda nao cadastrado.
- Dados de exemplo: nome "Corda Naval Pro", quantidade 10, minimo 3.
- Passos:
  1. Preencher o formulario.
  2. Clicar em "Cadastrar equipamento".
- Resultado esperado: item criado, formulario limpo e linha exibida na tabela.
- Resultado obtido: **Aprovado** — Simulado em 2025-11-17; backend retornou 201 e item surgiu na tabela apos recarga automatica.

### TC-06 - Validacao de nome obrigatorio
- Pre-condicoes: autenticado.
- Passos:
  1. Deixar "Nome do equipamento" vazio.
  2. Informar valores numericos validos nos demais campos.
  3. Clicar em "Cadastrar equipamento".
- Resultado esperado: alerta "Informe o nome do equipamento." e nenhum registro criado.
- Resultado obtido: **Reprovado** — Simulado em 2025-11-17; formulario permitiu envio vazio, requisicao 400 foi disparada e alerta amigavel nao apareceu. Registrar defeito FE-001.

## 4. Fluxo de equipamentos

### TC-07 - Lancamento de entrada valida
- Pre-condicoes: usuario autenticado; equipamento existente.
- Dados de exemplo: equipamento "Corda Naval Pro", tipo "Entrada", quantidade 5.
- Passos:
  1. Selecionar equipamento.
  2. Marcar "Entrada".
  3. Informar quantidade positiva.
  4. Clicar em "Lancar".
- Resultado esperado: alerta de sucesso, incremento de estoque e reflexo imediato na lista.
- Resultado obtido: **Aprovado** — Simulado em 2025-11-17; estoque atualizado de 10 para 15 e alerta de sucesso exibido.

### TC-08 - Lancamento com quantidade invalida
- Pre-condicoes: usuario autenticado; equipamento existente.
- Passos:
  1. Selecionar equipamento.
  2. Informar quantidade 0 ou negativa.
  3. Clicar em "Lancar".
- Resultado esperado: alerta "Informe uma quantidade > 0." e nenhum movimento registrado.
- Resultado obtido: **Aprovado** — Simulado em 2025-11-17 com quantidade zero; alerta exibido e nenhum POST enviado.

## 5. Resiliencia da API

### TC-09 - Falha ao carregar equipamentos
- Pre-condicoes: API indisponivel.
- Passos:
  1. Autenticar.
  2. Abrir "Cadastro de Equipamentos".
- Resultado esperado: console registra erro e tabela permanece vazia.
- Resultado obtido: **Aprovado** — Simulado em 2025-11-17 desligando o backend; erro logado no console e tabela exibiu mensagem de lista vazia.

### TC-10 - Falha ao registrar movimentacao
- Pre-condicoes: API indisponivel.
- Passos:
  1. Abrir "Fluxo de Equipamentos".
  2. Preencher o formulario e clicar em "Lancar".
- Resultado esperado: alerta "Erro ao registrar movimentacao" ou mensagem retornada pelo backend.
- Resultado obtido: **Reprovado** — Simulado em 2025-11-17 com backend fora do ar; aplicacao exibiu apenas loading e nao retornou alerta. Registrar defeito FE-002.

## Observacoes finais
- Os dez testes acima cobrem dois cenarios por categoria funcional.
- Resultados simulados com base na versao de 2025-11-17; repetir execucao real apos correcao dos defeitos FE-001 e FE-002.

