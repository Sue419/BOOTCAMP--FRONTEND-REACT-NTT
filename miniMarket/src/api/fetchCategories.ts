import { API_URL } from "../env/env";
import { Category } from "../types/category";
import { mapperCategories } from "./mapper/mapperGetCategories";

export async function fetchCategories(): Promise<Category[]> {
    try {
        const response = await fetch(`${API_URL}/products/categories`);
        if (!response.ok) {
            throw new Error('No se pudo obtener las categorías');
        }
        const data = await response.json();
        const dataCategories = data.map(mapperCategories); 
        return dataCategories;
    } catch (error) {
        //console.log({error});
        return [];
    } 
}