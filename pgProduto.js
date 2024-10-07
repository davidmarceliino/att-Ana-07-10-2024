// Inicializa o carrinho no localStorage, se não existir
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

// Função para incrementar a quantidade
function incrementQuantity() {
    const quantityInput = document.getElementById('productQuantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

// Função para decrementar a quantidade
function decrementQuantity() {
    const quantityInput = document.getElementById('productQuantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// Função para adicionar o produto ao carrinho
function addToCart(productName, productPrice) {
    const quantity = parseInt(document.getElementById('productQuantity').value) || 1;
    const cart = JSON.parse(localStorage.getItem('cart'));

    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${quantity} de ${productName} adicionado ao carrinho por R$: ${(productPrice * quantity).toFixed(2)}`);
}

// Função para mudar a imagem do produto
function changeImage(newImage) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = newImage;
}