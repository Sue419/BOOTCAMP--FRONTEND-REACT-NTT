import { Product } from "../domain/product";
import { mapperGetProducts } from "./mapper/mapperGetProduct";

export async function fetchProducts(): Promise<Product[]> {
    try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de productos');
        }
        const data = await response.json();
        const products = data.products.map(mapperGetProducts); 
        return products;
    } catch (error) {
        console.log({error});
        return [];
    }
}