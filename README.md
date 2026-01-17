# API de Sustentabilidade

Esta é uma API simples desenvolvida com Node.js e Express para gerenciar iniciativas de sustentabilidade. O projeto foi criado especialmente para iniciantes em programação, ajudando a entender conceitos básicos de desenvolvimento de APIs, como rotas, serviços e manipulação de dados.

## Funcionalidades

A API permite realizar operações básicas de CRUD (Criar, Ler, Atualizar, Deletar) em iniciativas de sustentabilidade:

- **Listar todas as iniciativas**: Ver todas as iniciativas cadastradas.
- **Obter uma iniciativa específica**: Buscar por ID.
- **Criar uma nova iniciativa**: Adicionar uma nova iniciativa.
- **Atualizar uma iniciativa**: Modificar dados de uma iniciativa existente.
- **Deletar uma iniciativa**: Remover uma iniciativa.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para Node.js, usado para criar as rotas da API.

## Pré-requisitos

Antes de começar, você precisa ter o Node.js instalado no seu computador. Você pode baixar a versão mais recente em [nodejs.org](https://nodejs.org/).

Para verificar se o Node.js está instalado, abra o terminal e digite:

```bash
node --version
```

Se aparecer uma versão (como v16.14.0), está tudo certo!

## Instalação

Siga estes passos para instalar e rodar o projeto:

1. **Clone o repositório**: Baixe o código do projeto para o seu computador.
   ```bash
   git clone https://github.com/elvis-in-tech/workshop-testes-documentacao-copilot.git
   ```

2. **Entre na pasta do projeto**:
   ```bash
   cd workshop-testes-documentacao-copilot
   ```

3. **Instale as dependências**: Isso baixa todas as bibliotecas necessárias.
   ```bash
   npm install
   ```

4. **Inicie o servidor**:
   ```bash
   npm start
   ```

O servidor estará rodando em `http://localhost:3000`. Você verá a mensagem "Server running on port 3000" no terminal.

## Como Usar

A API está rodando localmente. Você pode testá-la usando ferramentas como o navegador, curl (no terminal) ou Postman.

### Endpoints Disponíveis

- **GET /**: Página de boas-vindas com lista de endpoints.
- **GET /initiatives**: Lista todas as iniciativas.
- **GET /initiatives/:id**: Obtém uma iniciativa específica pelo ID.
- **POST /initiatives**: Cria uma nova iniciativa.
- **PUT /initiatives/:id**: Atualiza uma iniciativa existente.
- **DELETE /initiatives/:id**: Remove uma iniciativa.

### Exemplos de Uso

#### 1. Ver a página de boas-vindas
Abra o navegador e acesse: `http://localhost:3000/`

Ou use curl:
```bash
curl http://localhost:3000/
```

#### 2. Listar todas as iniciativas
```bash
curl http://localhost:3000/initiatives
```

Resposta esperada:
```json
[
  {
    "id": 1,
    "name": "Plant Trees",
    "description": "Plant 1000 trees in the city",
    "category": "ecological action",
    "status": "active"
  },
  {
    "id": 2,
    "name": "Reduce Carbon",
    "description": "Reduce carbon emissions by 20%",
    "category": "carbon reduction",
    "status": "pending"
  }
]
```

#### 3. Obter uma iniciativa específica
```bash
curl http://localhost:3000/initiatives/1
```

#### 4. Criar uma nova iniciativa
```bash
curl -X POST http://localhost:3000/initiatives \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Recycle Program",
    "description": "Implement recycling in schools",
    "category": "waste management",
    "status": "active"
  }'
```

#### 5. Atualizar uma iniciativa
```bash
curl -X PUT http://localhost:3000/initiatives/1 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "completed"
  }'
```

#### 6. Deletar uma iniciativa
```bash
curl -X DELETE http://localhost:3000/initiatives/1
```

## Estrutura do Projeto

```
workshop-testes-documentacao-copilot/
├── LICENSE
├── package.json          # Configurações do projeto e dependências
├── README.md             # Este arquivo
└── src/
    ├── app.js            # Arquivo principal do servidor
    ├── routes/
    │   └── sustainability.js  # Definição das rotas da API
    └── services/
        └── sustainabilityService.js  # Lógica de negócio e dados
```

- **src/app.js**: Configura o servidor Express, define middlewares e inicia o servidor.
- **src/routes/sustainability.js**: Define as rotas (endpoints) da API.
- **src/services/sustainabilityService.js**: Contém a lógica para manipular os dados das iniciativas.

## Testes

Para testar a API, use os comandos curl acima ou uma ferramenta como Postman. Certifique-se de que o servidor esteja rodando (`npm start`).

## Contribuição

Contribuições são bem-vindas! Se você é iniciante, este é um ótimo projeto para praticar.

1. Faça um fork do projeto.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Faça suas mudanças e commit: `git commit -m 'Adicionei uma nova feature'`.
4. Envie para o repositório original: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
