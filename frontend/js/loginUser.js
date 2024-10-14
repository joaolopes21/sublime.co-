document.getElementById('form-login').addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const data = { email, senha };

    try {
        const response = await fetch('http://localhost:3000/cliente/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            alert('Login realizado com sucesso!');
            window.location.href = 'index.html';
        } else {
            const error = await response.json();
            alert(`Erro: ${error.message}`);
        }
    } catch (erro) {
        console.error('Erro ao enviar o formulário:', erro);
        alert('Ocorreu um erro ao fazer login. Por favor, tente novamente.');
    }
});
