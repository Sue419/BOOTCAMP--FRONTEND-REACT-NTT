import { Product } from "../types/product";

let cartCount = 0;
let cart: Product[] = [];

export function updateCartCount(): void {
    const cartIcon = document.querySelector('.cart-icon span');
    if (cartIcon) {
        cartIcon.textContent = cartCount.toString();
    } else {
        console.error('No se encontró el elemento del contador del carrito');
    }
}

export function addToCart(product: Product): void {
    cart.push(product);
    cartCount++;
    updateCartCount();
}

export function getProductById(productId: string, products: Product[]): Product | undefined {
    return products.find(product => product.id.toString() === productId);
}
