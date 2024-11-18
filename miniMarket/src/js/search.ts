import { updateProductCards } from "./updateProductCard";

export function searchProducts(event, products) {
    const query = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(query) || product.description.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query)
    );
    updateProductCards(filteredProducts);
}