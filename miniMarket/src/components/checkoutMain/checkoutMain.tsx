import { FC } from "react";
import SummaryCart from "../SummaryCart/summaryCart";
import CheckoutForm from "../checkoutForm/Form";
import style from "./checkoutMain.module.css"

const CheckoutMain: FC = () => {
  return (
    <main className={style["main-container"]}>
      <SummaryCart />
      <CheckoutForm />
    </main>
  );
};

export default CheckoutMain;
