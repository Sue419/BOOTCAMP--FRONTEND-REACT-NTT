import { FC} from 'react';
import { Product } from '../../domain/product';
import { truncateText } from '../../utils/truncateText';
import { calculateDiscountedPrice } from '../../utils/discount';
import AddToCartButton from '../buttonCard/buttonCard';
import './productCard.css'


interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <article className="product">
            <div className="product-image">
                <img src={product.image[0]} alt={product.title} />
            </div>
            <div className="card-info">
                <h4 className="product-brand">{product.brand}</h4>
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{truncateText(product.description, 100)}</p>
                <p className="product-category">
                    <span>{product.category}</span>
                </p>
            </div>
            <div className="product-price">
                <p className="product-original-price">Precio: ${product.price}</p>
                <p className="product-discounted-price">
                    Precio (-{product.discountPercentage}%):
                    <span className="final-price">${calculateDiscountedPrice(product.price, product.discountPercentage)}</span>
                </p>
            </div>
            <AddToCartButton product={product} />
        </article>
    );
};

export default ProductCard;
