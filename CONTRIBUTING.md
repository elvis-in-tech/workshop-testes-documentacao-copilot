# Guia de Contribuição

Obrigado por querer contribuir com este projeto! Este é um ótimo lugar para iniciantes praticarem e aprenderem. Siga este guia para contribuir de forma adequada.

## Código de Conduta

Somos uma comunidade inclusiva e respeitosa. Qualquer contribuição deve:
- Ser respeitosa com todos os membros
- Evitar linguagem discriminatória ou ofensiva
- Focar em ideias e código, não em pessoas

## Antes de Começar

1. **Entenda o projeto**: Leia o [README.md](README.md) para entender o que o projeto faz.
2. **Tenha Node.js instalado**: Veja as instruções no README.
3. **Instale as dependências**: Execute `npm install` na pasta do projeto.

## Processo de Contribuição

### Passo 1: Faça um Fork do Repositório

Um fork é uma cópia do repositório na sua conta GitHub. Assim você pode fazer mudanças sem afetar o projeto original.

1. Vá para o repositório no GitHub
2. Clique no botão **Fork** no canto superior direito
3. Escolha sua conta para fazer o fork

### Passo 2: Clone o Repositório

Clone a sua cópia para o seu computador:

```bash
git clone https://github.com/SEU-USUARIO/workshop-testes-documentacao-copilot.git
cd workshop-testes-documentacao-copilot
```

**Substitua `SEU-USUARIO`** pelo seu nome de usuário do GitHub.

### Passo 3: Crie uma Branch

Uma branch é como um "ramo" do projeto onde você trabalha isoladamente. Sempre crie uma branch com um nome descritivo:

```bash
git checkout -b minha-feature
```

**Exemplos de bons nomes para branches:**
- `add-validation` (adicionar validação)
- `fix-bug-cors` (corrigir bug de CORS)
- `improve-docs` (melhorar documentação)
- `add-error-handling` (adicionar tratamento de erros)

**Evite nomes como:** `teste`, `mudancas`, `atualizacao`

### Passo 4: Faça suas Mudanças

Agora você pode editar os arquivos do projeto! Algumas dicas:

- **Faça mudanças pequenas**: Deixe as mudanças focadas em uma coisa específica.
- **Teste suas mudanças**: Rode `npm start` e verifique se funciona.
- **Mantenha o código legível**: Use nomes descritivos para variáveis e funções.

**Exemplo de boas práticas:**
```javascript
// ❌ Ruim
function gt(a, b) {
  return a > b ? a : b;
}

// ✅ Bom
function getGreaterNumber(firstNumber, secondNumber) {
  return firstNumber > secondNumber ? firstNumber : secondNumber;
}
```

### Passo 5: Faça Commits

Commits são "snapshots" (fotos) do seu código em um momento específico. Faça commits frequentes com mensagens claras:

```bash
git add .
git commit -m "Adicionar validação para nome da iniciativa"
```

**Dicas para boas mensagens de commit:**
- Use imperativos: "Adicionar" em vez de "Adicionei"
- Seja descritivo, mas conciso
- Máximo de 50 caracteres na primeira linha

**Exemplos:**
- ✅ `Adicionar tratamento de erros em POST /initiatives`
- ✅ `Corrigir validação de ID`
- ✅ `Melhorar README com exemplos`
- ❌ `mudancas`
- ❌ `atualizacao no codigo`

### Passo 6: Envie para o GitHub

Envie sua branch para o seu repositório fork no GitHub:

```bash
git push origin minha-feature
```

### Passo 7: Abra um Pull Request

1. Vá ao repositório original no GitHub
2. Você verá uma sugestão para abrir um Pull Request
3. Clique em **"Compare & pull request"**
4. Descreva suas mudanças de forma clara:
   - **Título**: Uma linha descrevendo a mudança
   - **Descrição**: Explique por que essa mudança é importante, o que você mudou e como testar

**Exemplo de boa descrição:**
```
Título: Adicionar validação para campo 'name' em POST /initiatives

Descrição:
- Adiciona validação para garantir que 'name' não está vazio
- Retorna erro 400 se 'name' não for fornecido
- Adiciona testes para cobrir este caso
```

## Checklist Antes de Fazer o Pull Request

- [ ] Você testou as mudanças rodando `npm start`?
- [ ] Suas mudanças resolvem um problema real ou adicionam uma funcionalidade útil?
- [ ] Você seguiu as convenções de código do projeto?
- [ ] Sua mensagem de commit é clara e descritiva?
- [ ] Você verificou se não há erros no console?

## O Que NÃO Fazer

- ❌ Fazer mudanças muito grandes em um único Pull Request
- ❌ Modificar o `package.json` sem comunicar na issue primeiro
- ❌ Adicionar dependências externas sem justificar
- ❌ Deixar `console.log()` ou `debugger` no código final
- ❌ Fazer mudanças não relacionadas no mesmo PR

## Tipos de Contribuição Bem-Vindas

### 1. Corrigir Bugs
Se você encontrou um problema, abra uma issue descrevendo:
- O que você fez
- O que você esperava acontecer
- O que aconteceu na verdade

### 2. Melhorar Documentação
- Corrigir erros de digitação
- Adicionar exemplos mais claros
- Explicar conceitos melhor

### 3. Adicionar Funcionalidades
Algumas ideias:
- Adicionar validação mais robusta
- Criar testes automatizados
- Adicionar tratamento de erros
- Melhorar mensagens de erro

### 4. Refatorar Código
- Melhorar legibilidade
- Remover duplicação
- Seguir melhores práticas

## Estrutura do Projeto (para Iniciantes)

Se você quer adicionar uma nova funcionalidade, entenda a estrutura:

```
src/
├── app.js                    # Configuração do servidor
├── routes/
│   └── sustainability.js     # Define os endpoints (URLs)
└── services/
    └── sustainabilityService.js  # Lógica dos dados
```

**Fluxo de uma requisição:**
```
1. Usuário faz requisição (GET, POST, etc.)
2. Express roteia para o arquivo correto em routes/
3. Route chama a função do service
4. Service faz a lógica e retorna dados
5. Route envia resposta ao usuário
```

## Convenções de Código

### Nomes de Variáveis e Funções
```javascript
// Use camelCase (primeira letra minúscula, próximas maiúsculas)
const userName = "João";
function getUserById(id) { }
```

### Nomes de Arquivos
```
// Use kebab-case (com hífens)
sustainability.js
sustainability-service.js
```

### Indentação
```javascript
// Use 2 espaços
function example() {
  if (true) {
    console.log("Hello");
  }
}
```

## Perguntas?

Se tiver dúvidas:
1. Verifique o README.md
2. Abra uma issue com sua pergunta
3. Procure por issues similares que já foram respondidas

## Exemplo Completo: Sua Primeira Contribuição

```bash
# 1. Fork o repositório (via GitHub)

# 2. Clone
git clone https://github.com/SEU-USUARIO/workshop-testes-documentacao-copilot.git
cd workshop-testes-documentacao-copilot

# 3. Instale dependências
npm install

# 4. Crie uma branch
git checkout -b corrigir-typo-readme

# 5. Faça mudanças (por exemplo, corrija um erro no README)

# 6. Teste
npm start

# 7. Commit
git add README.md
git commit -m "Corrigir typo no README"

# 8. Envie para GitHub
git push origin corrigir-typo-readme

# 9. Abra um Pull Request no GitHub
```

## Depois do Pull Request

- Sua mudança será revisada
- Você pode receber sugestões de melhorias
- Após aprovação, será feito merge com o projeto principal
- Parabéns! Você é um contribuidor agora! 🎉

## Recursos Úteis

- [Git - Guia Prático](https://rogerdudler.github.io/git-guide/index.pt_BR.html)
- [GitHub Docs - Pull Requests](https://docs.github.com/pt/pull-requests)
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/)

## Obrigado!

Obrigado por dedicar seu tempo a este projeto. Contribuições de iniciantes são especialmente valiosas, pois ajudam a identificar aonde o projeto pode melhorar!