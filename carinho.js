function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart');
    const totalElement = document.getElementById('total');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Nenhum item no carrinho.</p>';
        totalElement.innerHTML = '';
    } else {
        cartContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `${item.name} (x${item.quantity}) - R$: ${(item.price * item.quantity).toFixed(2)}`;
            cartContainer.appendChild(cartItem);
        });

        totalElement.innerHTML = `<strong>Total: R$: ${total.toFixed(2)}</strong>`;
    }
}

window.onload = displayCart;