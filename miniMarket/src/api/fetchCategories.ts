export async function fetchCategories () {
    try {
        const response = await fetch('https://dummyjson.com/products/categories');
        if (!response.ok) {
            throw new Error('No se pudo obtener las categorías');
        }
        const dataCategories = await response.json();
        return dataCategories;
    } catch (error) {
        console.log({error});
    } 
}