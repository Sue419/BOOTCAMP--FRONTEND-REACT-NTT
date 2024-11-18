import { fetchCategories } from "./js/fetchCategories";
import { fetchProducts } from "./js/fetchProducts";
import { renderCategoryFilter } from "./js/renderCategoryFilter";
import { updateProductCards } from "./js/updateProductCard.js";
import { searchProducts } from "./js/search";
import { addToCart } from "./js/cart";

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


