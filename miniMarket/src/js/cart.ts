let cartCount = 0;

export function updateCartCount() {
    const cartIcon = document.querySelector('.cart-icon span');
    if (cartIcon) {
        cartIcon.textContent = cartCount;
    } else {
        console.error('No se encontró el elemento del contador del carrito');
    }
}

export function addToCart(product) {
    cartCount++;
    updateCartCount();
}
