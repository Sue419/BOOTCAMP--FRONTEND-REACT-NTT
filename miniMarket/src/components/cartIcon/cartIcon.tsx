import { FC, useEffect } from "react";
import { useCart } from "../../hooks/useCart";

const CartIcon: FC = () => {
  const { cartCount } = useCart();

  useEffect(() => {
  }, [cartCount]); 

  return (
    <div className="cart-icon">
      <img src="./src/assets/icons/cart-shopping.svg" alt="Carrito de compras" />
      <span>{cartCount}</span>
    </div>
    
  );
};

export default CartIcon;
