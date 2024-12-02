const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontroller');


// Rota para registrar um novo usuário
router.post('/register', authController.register);

module.exports = router;
try {
    const authController = require('../controllers/authcontroller');
    console.log('AuthController carregado com sucesso.');
  } catch (error) {
    console.error('Erro ao carregar AuthController:', error);
  }
  