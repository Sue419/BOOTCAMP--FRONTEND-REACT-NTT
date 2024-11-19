import { fetchCategories } from "./api/fetchCategories";
import { fetchProducts } from "./api/fetchProducts";
import { renderCategoryFilter } from "./feature/renderCategoryFilter";
import { updateProductCards } from "./feature/updateProductCard";
import { searchProducts } from "./feature/search";
import { addToCart} from "./feature/cart";
import { getProductById } from "./utils/getProductById";

const categoryFilter = document.querySelector('#category-filter') as HTMLSelectElement;
const searchInputDesktop = document.querySelector('#desktop-search') as HTMLInputElement;
const searchInputMobile = document.querySelector('#mobile-search') as HTMLInputElement;

//
async function initialize(): Promise<void> {
    const categories = await fetchCategories();
    renderCategoryFilter(categories);

    const fetchedProducts = await fetchProducts();
    updateProductCards(fetchedProducts);

    categoryFilter.addEventListener('change', (event) => {
        const selectedCategory = (event.target as HTMLSelectElement).value;
        const filteredProducts = selectedCategory === ""
            ? fetchedProducts
            : fetchedProducts.filter(product => product.category === selectedCategory);
        updateProductCards(filteredProducts);
    });

    searchInputDesktop.addEventListener('input', (event) => {
        const inputEvent = event as InputEvent;
        searchProducts(inputEvent, fetchedProducts);
    });
    
    searchInputMobile.addEventListener('input', (event) => {
        const inputEvent = event as InputEvent;
        searchProducts(inputEvent, fetchedProducts);
    });

    const productContainer = document.querySelector('.product-container');
    if (productContainer) {
        productContainer.addEventListener('click', (event) => {
            if (event.target && (event.target as HTMLElement).classList.contains('add-to-cart-btn')) {
                const button = event.target as HTMLElement;
                const productId = button.getAttribute('data-product-id');
                if (productId) {
                    const product = getProductById(productId, fetchedProducts);
                    if (product) {
                        addToCart(product);
                    }
                }
            }
        });
    }   
        
}

initialize();


