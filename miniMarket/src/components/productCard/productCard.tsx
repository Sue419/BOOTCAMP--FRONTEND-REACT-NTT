import { FC} from 'react';
import { Product } from '../../domain/product';
import { truncateText } from '../../utils/truncateText';
import { calculateDiscountedPrice } from '../../utils/discount';
import AddToCartButton from '../buttonCard/buttonCard';
import style from "./productCard.module.css"


interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <article className={style["product"]}>
            <div className={style["product-image"]}>
                <img src={product.image[0]} alt={product.title} />
            </div>
            <div className={style["card-info"]}>
                <h4 className={style["product-brand"]}>{product.brand}</h4>
                <h2 className={style["product-title"]}>{product.title}</h2>
                <p className={style["product-description"]}>{truncateText(product.description, 100)}</p>
                <p className={style["product-category"]}>
                    <span>{product.category}</span>
                </p>
            </div>
            <div className={style["product-price"]}>
                <p className={style["product-original-price"]}>Precio: ${product.price}</p>
                <p className={style["product-discounted-price"]}>
                    Precio (-{product.discountPercentage}%):
                    <span className={style["final-price"]}>${calculateDiscountedPrice(product.price, product.discountPercentage)}</span>
                </p>
            </div>
            <AddToCartButton product={product} />
        </article>
    );
};

export default ProductCard;
