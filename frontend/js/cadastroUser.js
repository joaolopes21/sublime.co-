document.getElementById('form-cadastro').addEventListener('submit', async function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const data = { nome, telefone, email, senha };



    try {
        const response = await fetch('http://localhost:3000/cliente/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            alert('Conta criada com sucesso!');
            window.location.href = 'login.html';
        } else {
            const error = await response.json();
            alert(`Erro: ${error.message}`);
        }
    } catch (erro) {
        console.error('Erro ao enviar o formulário:', erro);
        alert('Ocorreu um erro ao criar a conta. Por favor, tente novamente.');
    }
});
