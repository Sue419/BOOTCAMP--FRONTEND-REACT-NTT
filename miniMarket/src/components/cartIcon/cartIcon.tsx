import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const CartIcon: FC = () => {
  const { cartCount } = useCart();

  useEffect(() => {
  }, [cartCount]); 

  return (
    <Link to="/checkout">
      <button className="cart-icon">
        <img
          src="./src/assets/icons/cart-shopping.svg"
          alt="Carrito de compras"
        />
        <span>{cartCount}</span>
      </button>
    </Link>
    
  );
};

export default CartIcon;
