import { FC } from "react";
import { useCartActions } from "@/context/cart/cartAction";
import { Product, CartProduct } from "../../domain/product";
import { Button } from "../shared/button/button";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCartActions();

  const handleAddToCart = (product: Product) => {
    const cartProduct: CartProduct = { ...product, quantity: 1 };
    addToCart(cartProduct);
  };

  return (
    <Button
      className="add-to-cart-btn"
      onClick={() => handleAddToCart(product)}
      data-product-id={product.id}
    >
      Add to cart
      <div className="cart-icon_btn">
        <img src="./src/assets/icons/cart-shopping_white.svg" alt="Cart Icon" />
      </div>
    </Button>
  );
};

export default AddToCartButton;
