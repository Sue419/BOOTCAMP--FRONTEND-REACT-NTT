import { Product } from "../types/product";
import { updateProductCards } from "./updateProductCard";

export function searchProducts(event: InputEvent, products: Product[]) {
        const query = (event.target as HTMLInputElement).value.toLowerCase();
        // usar include
        const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(query) || product.description.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query)
    );
    updateProductCards(filteredProducts);
}