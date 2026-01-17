const express = require('express');
const sustainabilityRoutes = require('./routes/sustainability');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/initiatives', sustainabilityRoutes);

// Rota para a raiz
app.get('/', (req, res) => {
  res.json({
    message: 'Bem-vindo à API de Sustentabilidade',
    endpoints: {
      'GET /initiatives': 'Listar todas as iniciativas',
      'GET /initiatives/:id': 'Obter iniciativa por ID',
      'POST /initiatives': 'Criar nova iniciativa',
      'PUT /initiatives/:id': 'Atualizar iniciativa',
      'DELETE /initiatives/:id': 'Remover iniciativa'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});