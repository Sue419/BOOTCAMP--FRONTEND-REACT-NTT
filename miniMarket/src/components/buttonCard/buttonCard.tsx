import { FC } from "react";
import { useCart } from "../../hooks/useCart";
import { Product } from "../../domain/product";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <button
      className="add-to-cart-btn"
      onClick={() => addToCart(product)}
      data-product-id={product.id}
    >
      Add to cart
      <div className="cart-icon_btn">
        <img src="./src/assets/icons/cart-shopping_white.svg" alt="Cart Icon" />
      </div>
    </button>
  );
};

export default AddToCartButton;
