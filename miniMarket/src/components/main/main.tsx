import { FC } from "react";
import ProductList from "../productList/productList";
import { Product } from "../../domain/product";
import SummaryCart from "../SummaryCart/summaryCart";
import CheckoutForm from "../checkoutForm/Form";

interface MainProps {
  products: Product[];
  showCheckout: boolean;
}

const Main: FC<MainProps> = ({ products, showCheckout }) => {
  return (
    <main className="main-container">
      {showCheckout ? (
        <div>
          <SummaryCart />
          <CheckoutForm />
        </div>
      ) : (
        <ProductList products={products} /> 
      )}
    </main>
  );
};


export default Main;
