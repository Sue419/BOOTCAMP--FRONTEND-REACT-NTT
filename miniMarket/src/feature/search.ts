import { Product } from "../types/product";
import { updateProductCards } from "./updateProductCard";

export function searchProducts(event: InputEvent, products: Product[]) {
        const query = (event.target as HTMLInputElement).value.toLowerCase();

        const filteredProducts = products.filter(product =>
            [product.title, product.description, product.category, product.brand]
                .some(property => property && property.toLowerCase().includes(query))
        );
        
    updateProductCards(filteredProducts);
}