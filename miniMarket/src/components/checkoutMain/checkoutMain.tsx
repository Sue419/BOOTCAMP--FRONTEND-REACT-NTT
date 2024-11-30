import { FC } from "react";
import SummaryCart from "../SummaryCart/summaryCart";
import CheckoutForm from "../checkoutForm/Form";

const CheckoutMain: FC = () => {
  return (
    <main className="main-container">
      <SummaryCart />
      <CheckoutForm />
    </main>
  );
};

export default CheckoutMain;
