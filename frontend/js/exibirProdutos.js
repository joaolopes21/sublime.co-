document.addEventListener('DOMContentLoaded', async () => {
    const productGrid = document.querySelector('.product-grid');

    try {
        const response = await fetch('http://localhost:3000/produto/exibir');
        const products = await response.json();

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
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
});
