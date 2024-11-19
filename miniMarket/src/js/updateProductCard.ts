import { createProductCard } from "../components/productCard";
import { Product } from "../types/product";

export function updateProductCards(productsToDisplay: Product[]): void {
    const productContainer = document.querySelector('.product-container') as HTMLElement;
    while (productContainer.firstChild) {
        productContainer.removeChild(productContainer.firstChild);
    }

    if (productsToDisplay.length > 0) {
        productsToDisplay.forEach(product => {
            const productCard = createProductCard(product);
            productContainer.appendChild(productCard);
        });
    } else {
        const noProductsMessage = document.createElement('p');
        noProductsMessage.textContent = 'No se encontraron productos.';
        productContainer.appendChild(noProductsMessage);
    }
}
