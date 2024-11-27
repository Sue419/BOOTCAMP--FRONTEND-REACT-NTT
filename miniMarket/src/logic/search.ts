import { Product } from "../domain/product";

// podr'ia estar en un mapper

export function filterProducts(query: string, products: Product[]): Product[] {
    const lowerCaseQuery = query.toLowerCase();
    return products.filter(product =>
        [product.title, product.description, product.category, product.brand]
            .some(property => property && property.toLowerCase().includes(lowerCaseQuery))
    );
}
