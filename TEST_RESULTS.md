# Resultados Esperados dos Testes

## Como executar os testes:

```bash
npm test
```

## Estrutura dos testes criados:

### 1. **sustainabilityService.test.js** - Testes do Serviço
- **getAll()**
  - ✓ Retorna um array de iniciativas
  - ✓ Retorna iniciativas com campos obrigatórios

- **getById()**
  - ✓ Retorna uma iniciativa por ID
  - ✓ Retorna undefined para IDs inexistentes
  - ✓ Trata corretamente IDs em string

- **create()**
  - ✓ Cria uma nova iniciativa
  - ✓ Atribui ID único para cada iniciativa

- **update()**
  - ✓ Atualiza uma iniciativa existente
  - ✓ Retorna null para IDs inexistentes
  - ✓ Preserva outros campos ao atualizar

- **remove()**
  - ✓ Remove uma iniciativa
  - ✓ Retorna o objeto removido
  - ✓ Retorna null ao remover inexistente

### 2. **routes.test.js** - Testes das Rotas HTTP

- **GET /initiatives**
  - ✓ Retorna todas as iniciativas com status 200
  - ✓ Retorna iniciativas com estrutura correta

- **GET /initiatives/:id**
  - ✓ Retorna uma iniciativa específica
  - ✓ Retorna 404 para iniciativas inexistentes

- **POST /initiatives**
  - ✓ Cria uma nova iniciativa com status 201
  - ✓ Retorna a iniciativa criada com ID

- **PUT /initiatives/:id**
  - ✓ Atualiza uma iniciativa existente
  - ✓ Retorna 404 para iniciativas inexistentes

- **DELETE /initiatives/:id**
  - ✓ Deleta uma iniciativa
  - ✓ Retorna 404 para iniciativas inexistentes

## Total de testes: 20+

## Para rodar com mais detalhes:

```bash
# Modo verbose (mostra cada teste)
npm test -- --verbose

# Modo watch (reexecuta ao salvar)
npm run test:watch

# Com cobertura de testes
npm run test:coverage
```

## Requisitos instalados:
- ✓ Jest 29.0.0
- ✓ Supertest 6.3.0
- ✓ Express 4.18.2
