import { Category } from "../domain/category";
import { mapperCategories } from "./mapper/mapperGetCategories";

export async function fetchCategories(): Promise<Category[]> {
    try {
        const response = await fetch('https://dummyjson.com/products/categories');
        if (!response.ok) {
            throw new Error('No se pudo obtener las categorías');
        }
        const data  = await response.json();
        const dataCategories = data.map(mapperCategories); 
        return dataCategories;
    } catch (error) {
        console.error("Error al obtener categorías", error);
        return [];
    } 
}