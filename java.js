const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/200' },
    // Add more products
];

let cart = [];
const productsEl = document.getElementById('products');
const cartBtn = document.getElementById('cart-btn');
const cartEl = document.getElementById('cart');
const cartItemsEl = document.getElementById('cart-items');
const totalEl = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout-btn');
const closeCartBtn = document.getElementById('close-cart');
const checkoutEl = document.getElementById('checkout');
const checkoutForm = document.getElementById('checkout-form');

// Display products
products.forEach(product => {
    const productEl = document.createElement('div');
    productEl.className = 'product';
    productEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsEl.appendChild(productEl);
});

// Add to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

// Update cart display
function updateCart() {
    cartItemsEl.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsEl.appendChild(li);
        total += item.price;
    });
    totalEl.textContent = total;
    cartBtn.textContent = `Cart (${cart.length})`;
}

// Toggle cart
cartBtn.addEventListener('click', () => cartEl.classList.toggle('hidden'));
closeCartBtn.addEventListener('click', () => cartEl.classList.add('hidden'));

// Checkout
checkoutBtn.addEventListener('click', () => {
    cartEl.classList.add('hidden');
    checkoutEl.classList.remove('hidden');
});

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order placed! (Demo only)');
    cart = [];
    updateCart();
    checkoutEl.classList.add('hidden');
});