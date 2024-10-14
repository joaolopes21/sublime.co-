const clienteId = localStorage.getItem('clienteId');
const data = { nome, email, telefone };

const response = await fetch(`http://localhost:3000/cliente/${clienteId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});
