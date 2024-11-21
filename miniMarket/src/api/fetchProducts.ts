import { API_URL } from "../env/env";
import { Product } from "../types/product";
import { mapperGetProducts } from "./mapper/mapperGetProduct";

export async function fetchProducts(): Promise<Product[]> {
    try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de productos');
        }
        const data = await response.json();
        const products = data.products.map(mapperGetProducts); 
        return products;
    } catch (error) {
        //console.log({error});
        return [];
    }
}