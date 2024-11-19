import { truncateText } from "../utils/truncateText"
import { calculateDiscountedPrice } from "../utils/discount";
import { Product } from "../types/product";

export const createProductCard = (product: Product): HTMLElement => {
    const productCard = document.createElement('article');
    productCard.classList.add('product');

    // Imagen
    const contentProductImage = createImageContainer(product);
  
    // Información
    const cardInfo = createCardInfo(product);
  
    // Precio
    const productPrice = createCardPrice(product);
  
    // Botón
    const addToCartButton = createAddToCartButton(product);
  
    // Orden
    productCard.appendChild(contentProductImage);
    productCard.appendChild(cardInfo);
    productCard.appendChild(productPrice);
    productCard.appendChild(addToCartButton);
  
    const productContainer = document.querySelector('.product-container');
    if (productContainer) {
        productContainer.appendChild(productCard);
    }

    return productCard;
};

// Imagen del producto
const createImageContainer = (product: Product): HTMLElement => {
    const contentProductImage = document.createElement('div');
    contentProductImage.classList.add('product-image');
    
    const productImage = document.createElement('img');
    productImage.src = product.image[0];
    productImage.alt = product.title;
    
    contentProductImage.appendChild(productImage);
    return contentProductImage;
};

// Información del producto (título, descripción, categoría)
const createCardInfo = (product: Product): HTMLElement => {
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const productBrand = document.createElement('h4');
    productBrand.classList.add('product-brand');
    productBrand.textContent = product.brand || 'No Brand';
  
    const productTitle = document.createElement('h2');
    productTitle.classList.add('product-title');
    productTitle.textContent = product.title;
  
    const productDescription = document.createElement('p');
    productDescription.classList.add('product-description');
    productDescription.textContent = truncateText(product.description, 100);
  
    const productCategory = document.createElement('p');
    productCategory.classList.add('product-category');
    productCategory.textContent = ``;
    
    const tagCategory = document.createElement('span');
    tagCategory.textContent = `${product.category}`;

    cardInfo.appendChild(productBrand);
    cardInfo.appendChild(productTitle);
    cardInfo.appendChild(productCategory);
    cardInfo.appendChild(productDescription);
    productCategory.appendChild(tagCategory);

    return cardInfo;
};

// Precio del producto (precio original y con descuento)
const createCardPrice = (product: Product): HTMLElement => { 
    const productPrice = document.createElement('div');
    productPrice.classList.add('product-price');

    // Precio original
    const originalPrice = document.createElement('p');
    originalPrice.classList.add('product-original-price');
    originalPrice.textContent = `Precio: $ ${product.price}`;

    // Precio con descuento
    const discountedPrice = document.createElement('p');
    discountedPrice.classList.add('product-discounted-price');
    discountedPrice.textContent = `Precio (-${product.discountPercentage}%): `;
    
    const finalPrice = document.createElement('span');
    finalPrice.classList.add('final-price');
    finalPrice.textContent = `$ ${calculateDiscountedPrice(product.price, product.discountPercentage)}`;

    //
    productPrice.appendChild(originalPrice);
    productPrice.appendChild(discountedPrice);
    discountedPrice.appendChild(finalPrice);

    return productPrice;
};

// Botón de añadir al carrito
const createAddToCartButton = (product: Product): HTMLElement => {
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart-btn');
    addToCartButton.textContent = `Añadir al carrito`;
    addToCartButton.setAttribute('data-product-id', product.id.toString());


    const cartIcon = document.createElement('div');
    cartIcon.classList.add('cart-icon_btn');
    const cartImage = document.createElement('img');
    cartImage.src = './src/assets/icons/cart-shopping_white.svg';
    cartImage.alt = 'Cart Icon';
    cartIcon.appendChild(cartImage);

    addToCartButton.appendChild(cartIcon);
    return addToCartButton;
};
