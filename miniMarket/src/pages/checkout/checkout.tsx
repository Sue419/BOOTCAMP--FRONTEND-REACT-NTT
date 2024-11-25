import { FC } from "react";
import SummaryCart from "../../components/SummaryCart/summaryCart";
import CheckoutForm from "../../components/checkoutForm/Form";
import { CartProvider } from "../../context/cartContext";

const Checkout: FC = () => {
  return (
    <div>
      <CartProvider>
        <SummaryCart />
        <CheckoutForm />
      </CartProvider>
    </div>
  );
};

export default Checkout;
