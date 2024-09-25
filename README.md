HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Platform</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="header">
        <h1>E-Commerce Platform</h1>
        <input type="text" id="search" placeholder="Search products">
    </div>

    <div class="products" id="products-container">
        <div class="product-card">
            <img src="https://th.bing.com/th/id/OIP.RQbz2iNZ0B03Et_jc7GO8AHaHa?rs=1&pid=ImgDetMain" alt="Product 1">
            <h3>Product 1</h3>
            <p>Rating: 4.5</p>
            <p>₹500</p>
            <button onclick="addToCart(1)">Add to Cart</button>
        </div>

        <div class="product-card">
            <img src="https://forever-moissanite.com/wp-content/uploads/2018/08/203r1-Twist-Round-Cut-Rose-Gold-Engagement-Ring-by-forever-moissanite-.jpg" alt="Product 2">
            <h3>Product 2</h3>
            <p>Rating: 4.0</p>
            <p>₹800</p>
            <button onclick="addToCart(2)">Add to Cart</button>
        </div>

        <div class="product-card">
            <img src="https://th.bing.com/th/id/OIP.YguOkIP2xIjpoReX_q0R4gHaHa?rs=1&pid=ImgDetMain" alt="Product 3">
            <h3>Product 3</h3>
            <p>Rating: 4.8</p>
            <p>₹1,000</p>
            <button onclick="addToCart(3)">Add to Cart</button>
        </div>
    </div>

    <div class="cart-price-section">
        <!-- Cart Section -->
        <div class="cart-container">
            <h2>Cart</h2>
            <div id="cart-items">
                <div class="cart-item">
                    <img src="https://th.bing.com/th/id/OIP.RQbz2iNZ0B03Et_jc7GO8AHaHa?rs=1&pid=ImgDetMain" alt="Product 1">
                    <div>
                        <p>Product 1</p>
                        <p>₹500</p>
                    </div>
                    <div>
                        <button onclick="updateQuantity(1, 'decrease')">-</button>
                        <span>2</span>
                        <button onclick="updateQuantity(1, 'increase')">+</button>
                    </div>
                    <button onclick="removeFromCart(1)">Remove</button>
                </div>

                <div class="cart-item">
                    <img src="https://forever-moissanite.com/wp-content/uploads/2018/08/203r1-Twist-Round-Cut-Rose-Gold-Engagement-Ring-by-forever-moissanite-.jpg" alt="Product 2">
                    <div>
                        <p>Product 2</p>
                        <p>₹800</p>
                    </div>
                    <div>
                        <button onclick="updateQuantity(2, 'decrease')">-</button>
                        <span>1</span>
                        <button onclick="updateQuantity(2, 'increase')">+</button>
                    </div>
                    <button onclick="removeFromCart(2)">Remove</button>
                </div>
            </div>
        </div>

        <div id="price-details">
            <h3>Price Details</h3>
            <p>Total MRP: ₹<span id="total-mrp">1800</span></p>
            <p>Coupon Discount: ₹50</p>
            <p>Platform Fee: ₹10</p>
            <p>Shipping Charges: ₹20</p>
            <p>Total Amount: ₹<span id="total-amount">1780</span></p>
            <button id="place-order">Place Order</button>
        </div>
    </div>

    <script src="scripts.js"></script>

</body>
</html>

CSS

body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
}

.header {
    background-color: #444;
    color: white;
    padding: 20px;
    text-align: center;
}

#search {
    width: 50%;
    padding: 10px;
    margin-top: 10px;
    font-size: 16px;
}

.products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
}

.product-card {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    margin: 10px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 200px;
}

.product-card img {
    max-width: 100px;
    margin-bottom: 10px;
}

.cart-price-section {
    display: flex;
    justify-content: space-between;
    margin: 20px;
}

.cart-container {
    background-color: #e0e0e0;
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    width: 100%;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
}

.cart-item img {
    max-width: 50px;
}

#price-details {
    background-color: #d1c4e9;
    padding: 20px;
    border-radius: 10px;
    max-width: 300px;
    width: 100%;
    margin-left: 20px;
}

button {
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
    background-color: #444;
    color: white;
    border: none;
    border-radius: 5px;
}

button:hover {
    background-color: #333;
}

javascript

let cart = [
    { id: 1, title: "Product 1", price: 500, quantity: 2, image: "https://th.bing.com/th/id/OIP.RQbz2iNZ0B03Et_jc7GO8AHaHa?rs=1&pid=ImgDetMain" },
    { id: 2, title: "Product 2", price: 800, quantity: 1, image: "https://forever-moissanite.com/wp-content/uploads/2018/08/203r1-Twist-Round-Cut-Rose-Gold-Engagement-Ring-by-forever-moissanite-.jpg" }
];


function addToCart(productId) {
    const product = {
        1: { id: 1, title: "Product 1", price: 500, image: "https://th.bing.com/th/id/OIP.RQbz2iNZ0B03Et_jc7GO8AHaHa?rs=1&pid=ImgDetMain" },
        2: { id: 2, title: "Product 2", price: 800, image: "https://forever-moissanite.com/wp-content/uploads/2018/08/203r1-Twist-Round-Cut-Rose-Gold-Engagement-Ring-by-forever-moissanite-.jpg" },
        3: { id: 3, title: "Product 3", price: 1000, image: "https://th.bing.com/th/id/OIP.YguOkIP2xIjpoReX_q0R4gHaHa?rs=1&pid=ImgDetMain" }
    }[productId];

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1; 
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    displayCart();
}


function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; 

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div>
                <p>${item.title}</p>
                <p>₹${item.price}</p>
            </div>
            <div>
                <button onclick="updateQuantity(${item.id}, 'decrease')">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 'increase')">+</button>
            </div>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    updatePriceDetails();
}


function updateQuantity(productId, action) {
    const cartItem = cart.find(item => item.id === productId);

    if (action === 'increase') {
        cartItem.quantity += 1;
    } else if (action === 'decrease' && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
    } else {
        removeFromCart(productId);
    }

    displayCart();
}


function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    displayCart();
}

function updatePriceDetails() {
    const totalMRP = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = 50;
    const platformFee = 10;
    const shippingCharges = 20;
    const totalAmount = totalMRP - discount + platformFee + shippingCharges;

    document.getElementById('total-mrp').innerText = totalMRP.toFixed(2);
    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
}

displayCart()
