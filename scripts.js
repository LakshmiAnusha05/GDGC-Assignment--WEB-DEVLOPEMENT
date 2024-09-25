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
