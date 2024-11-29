import { FC} from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import IconButton from "../shared/iconButton/iconButton";

const CartIcon: FC = () => {
  const { cartCount } = useCart();

  // usemos enum para paths
  return (
    <Link to="/checkout">
      <IconButton
        icon="./src/assets/icons/cart-shopping.svg"
        alt="Carrito de compras"
        className="cart-icon"
      >
        <span>{cartCount}</span>
      </IconButton>
    </Link>
    
  );
};

export default CartIcon;
