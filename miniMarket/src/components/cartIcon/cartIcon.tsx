import { FC} from "react";
import { useCart } from "../../hooks/useCart";
import IconButton from "../shared/iconButton/iconButton";
import { AppRoutes } from "@/constants/routes";
import style from "./cartIcon.module.css"

const CartIcon: FC = () => {
  const { cartCount } = useCart();

  return (
      <IconButton
        link={AppRoutes.Checkout}
        icon="./src/assets/icons/cart-shopping.svg"
        alt="Cart"
        className={style["cart-icon"]}
      >
        <span>{cartCount}</span>
      </IconButton>
    
  );
};

export default CartIcon;
