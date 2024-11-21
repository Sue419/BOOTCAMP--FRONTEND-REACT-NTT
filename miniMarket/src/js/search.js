import { updateProductCards } from "./updateProductCard";

export function searchProducts(event, products) {
    const query = event.target.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        [product.title, product.description, product.category, product.brand]
            .some(property => property && property.toLowerCase().includes(query))
    );

    updateProductCards(filteredProducts);
}
