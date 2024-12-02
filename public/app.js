const registerForm = document.getElementById('registerForm');
const messageBox = document.getElementById('message');

// Função para enviar os dados de cadastro para o backend
registerForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

// Criação do objeto de dados para enviar
  const userData = {
    name,
    email,
    password
  };

  try {
    // Envia a requisição para o backend
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

// Verifica se a resposta foi bem-sucedida
    const data = await response.json();

    if (response.status === 201) {
      messageBox.innerHTML = `<p style="color: green;">${data.message}</p>`;
      // Limpar campos após o cadastro
      registerForm.reset();
    } else {
      messageBox.innerHTML = `<p style="color: red;">${data.message}</p>`;
    }
  } catch (error) {
    messageBox.innerHTML = `<p style="color: red;">Erro ao tentar cadastrar o usuário.</p>`;
    console.error('Erro ao enviar requisição:', error);
  }
});
