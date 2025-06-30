// app.js
document.addEventListener('DOMContentLoaded', function () {
    const apiURL = "https://dummyjson.com/products";
    const container = document.querySelector('.products-container');

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const products = data.products;
            

            container.innerHTML = '';

            products.forEach(product => {
                const card = document.createElement('div');
                card.classList.add('product-card');

                card.innerHTML = `
                <img class="product-img" src="${product.thumbnail}" alt="${product.title}">
                <div class="data">
                    <h3 class="title">${product.title}</h3>
                    <p class="description">${product.description}</p>
                    <p class="price">Price: <span class="value">${product.price}</span> $</p>
                    <div class="btns">
                        <button class="add-btn">
                            <i class="fa-solid fa-cart-shopping"></i> Add to cart
                        </button>
                        <button class="view-btn">
                            <i class="fa-solid fa-eye"></i> View
                        </button>
                    </div>
                </div>
            `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            container.innerHTML = `<p style="color:red;">Error loading products: ${error.message}</p>`;
            console.error("Fetch error:", error);
        });
});