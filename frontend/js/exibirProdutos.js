document.addEventListener('DOMContentLoaded', async () => {
    const productGrid = document.querySelector('.product-grid');
    const searchbar = document.getElementById('searchbar');
    let produtos = []; // Armazena todos os produtos

    try {
        const response = await fetch('http://localhost:3000/produto/exibir'); // URL da sua API de produtos
        const products = await response.json();
        produtos = products; // Atribui a resposta à variável produtos

        displayProducts(products); // Exibe os produtos ao carregar a página

        // Adiciona o evento de input para a barra de pesquisa
        searchbar.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase(); // Obtém o termo de busca
            const filteredProducts = produtos.filter(product =>
                product.description.toLowerCase().includes(searchTerm)
            ); // Filtra os produtos com base no termo de busca
            displayProducts(filteredProducts); // Exibe os produtos filtrados
        });

    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }

    // Função para exibir produtos
    function displayProducts(products) {
        productGrid.innerHTML = ''; // Limpa a lista de produtos atuais

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
          <span class="tag">LANÇAMENTO</span>
          <img src="${product.imageUrl}" alt="${product.description}" class="product-image">
          <h3 class="product-name">${product.description}</h3>
          <p class="product-price">de R$ ${product.price} por <strong>R$ ${product.pricepix}</strong> no PIX</p>
        `;

            productGrid.appendChild(productCard);
        });
    }
});
