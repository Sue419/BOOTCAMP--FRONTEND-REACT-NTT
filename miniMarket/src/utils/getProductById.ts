import { Product } from "../types/product";

export function getProductById(productId: string, products: Product[]): Product | undefined {
    return products.find(product => product.id.toString() === productId);
}
