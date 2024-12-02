const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importando as rotas
const authRoutes = require('./routes/auth'); 
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

//Habilitando o cors para o funcionamento do código no navegador. 
app.use(cors());

//Fazendo a autenticação das rotas.
app.use('/api/auth', authRoutes);

//iniciando o servidor.
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
