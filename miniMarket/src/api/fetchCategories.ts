import { Category } from "../types/category";
import { mapperCategories } from "./mapper/mapperGetCategories";

export async function fetchCategories(): Promise<Category[]> {
    try {
        // esta url podr'ia estar en una variable global para reutilizarla ya que se repite o en todo caso se podr'ia utilizar variables de entorno
        const response = await fetch('https://dummyjson.com/products/categories');
        if (!response.ok) {
            throw new Error('No se pudo obtener las categorías');
        }
        const data = await response.json();
        const dataCategories = data.map(mapperCategories); 
        return dataCategories;
    } catch (error) {
        console.log({error});
        return [];
    } 
}