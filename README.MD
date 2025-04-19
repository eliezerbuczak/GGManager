# GGManager 🎮

## Sobre o Projeto

GGManager é um aplicativo desenvolvido para a gestão de times de eSports, permitindo o cadastro de times, jogadores, torneios e partidas. O objetivo é facilitar a organização de competições e acompanhar a performance das equipes ao longo do tempo.

### Funcionalidades Prioritárias ✅
- [ ] Gerenciamento de Times: Criar, editar e remover times com nome, logo e descrição.

- [ ] Gerenciamento de Torneios: Criar, editar e excluir torneios.

- [ ] Gerenciamento de Partidas: Criar partidas dentro de torneios e registrar resultados.

- [ ] Login e autenticação para controle de acesso.

### Funcionalidades Adicionais (Trabalhos Futuros) 🚀

- [ ] Gerenciamento de Jogadores: Criar, editar e associar jogadores a times.

- [ ] Histórico de partidas para cada time e jogador.

- [ ] Sistema de ranking baseado no desempenho das equipes nos torneios.

- [ ] Notificações push para lembrar jogadores e organizadores sobre partidas agendadas.

- [ ] Dashboard com estatísticas e gráficos para visualizar o desempenho dos times.


## Banco de dados - Modelo:
https://dbdiagram.io/d/GGManager-6612f0cc03593b6b61675069

## 🗓️ Planejamento de Sprints
Abaixo está o cronograma de sprints para o desenvolvimento do GGManager. O planejamento foi dividido em ciclos semanais, com foco incremental nos módulos essenciais para o funcionamento do app.
### ✅ Sprint 1 – Estrutura inicial do projeto (2 semana)
Objetivos:
- Configurar ambiente de desenvolvimento (front-end e back-end)
- Definir estrutura do banco de dados e migrar tabelas
- Implementar sistema de autenticação básica (login e logout)
- Criar roles de usuário: Admin e Usuário comum

Tarefas:
- Setup do projeto (frameworks, dependências, banco)
- Middleware de autenticação
- Diferenciação de rotas/admin/user

### ✅ Sprint 2 – Gestão de times e torneios (2 semana)
Objetivos:

- CRUD de times (somente admin)
- CRUD de torneios (somente admin)
- Relacionar times com torneios

Tarefas:
- Telas de listagem e cadastro de times
- Telas de listagem e cadastro de torneios
- Adicionar times a torneios

### ✅ Sprint 3 – Partidas e resultados (2 semana)
Objetivos:
- Cadastro de partidas (oitavas → final)
- Lançamento de resultados
- Registro de score e vencedor

Tarefas:
- Tela para criação manual das chaves
- Tela para preenchimento de resultado da partida
- Lógica de avanço de fase (básica, manual)

### ✅ Sprint 4 – Acompanhamento pelo usuário comum (2 semana)
Objetivos:
- Tela de dashboard do time
- Visualização de partidas e resultados
- Consulta de torneios e confrontos

Tarefas:
- Tela "meu time"
- Tela de visualização de torneios
- Listagem de confrontos e resultados
