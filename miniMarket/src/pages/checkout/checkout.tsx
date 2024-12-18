import { FC } from "react";
import { CartProvider } from "../../context/cart/cartContext";
import Header from "../../components/header/header";
import CheckoutMain from "../../components/checkoutMain/checkoutMain";
import Footer from "../../components/footer/footer";
import { useCategories } from "../../hooks/useCategories";

const Checkout: FC = () => {
  const { categories } = useCategories();

  return (
      <CartProvider>
        <Header
          onSearch={() => {}}
          onCategoryChange={() => {}}
          categories={categories}
          isCheckoutPage={true}
        />
        <CheckoutMain />
        <Footer />
      </CartProvider>
  );
};

export default Checkout;
