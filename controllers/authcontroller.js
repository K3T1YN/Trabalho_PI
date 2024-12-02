const fs = require('fs');
const path = require('path');

// Caminho para o arquivo de armazenamento
const usersFilePath = path.join(__dirname, '../users.json');

// Função para registrar um novo usuário
exports.register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
  }

  let users = [];
  try {
    if (fs.existsSync(usersFilePath)) {
      const fileData = fs.readFileSync(usersFilePath, 'utf8');
      users = JSON.parse(fileData);
    } else {
      fs.writeFileSync(usersFilePath, JSON.stringify([]));
      console.log('Arquivo "users.json" criado com um array vazio.');
    }
  } catch (error) {
    console.error('Erro ao acessar o arquivo JSON:', error);
  }

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'E-mail já cadastrado!' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password
  };

  users.push(newUser);

  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: newUser });
  } catch (error) {
    console.error('Erro ao salvar no arquivo JSON:', error);
    return res.status(500).json({ message: 'Erro ao salvar o usuário.' });
  }
};
