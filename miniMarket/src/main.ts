import { fetchCategories } from "./api/fetchCategories.ts";
import { fetchProducts } from "./api/fetchProducts.ts";
import { renderCategoryFilter } from "./js/renderCategoryFilter.ts";
import { updateProductCards } from "./js/updateProductCard.ts";
import { searchProducts } from "./js/search.ts";
import { addToCart } from "./js/cart.ts";

const categoryFilter = document.querySelector('#category-filter');
const searchInputDesktop = document.querySelector('#desktop-search');
const searchInputMobile = document.querySelector('#mobile-search');

// 
async function initialize() {
    const categories = await fetchCategories();
    renderCategoryFilter(categories);

    const fetchedProducts = await fetchProducts();
    updateProductCards(fetchedProducts);

    categoryFilter.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;
        const filteredProducts = selectedCategory === ""
            ? fetchedProducts
            : fetchedProducts.filter(product => product.category === selectedCategory);
        updateProductCards(filteredProducts);
    });

    searchInputDesktop.addEventListener('input', (event) => searchProducts(event, fetchedProducts));
    searchInputMobile.addEventListener('input', (event) => searchProducts(event, fetchedProducts));

    document.querySelector('.product-container').addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('add-to-cart-btn')) {
            addToCart();
        }
    });
}

initialize();


