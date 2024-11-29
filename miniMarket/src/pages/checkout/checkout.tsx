import { FC } from "react";
import { CartProvider } from "../../context/cartContext";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Footer from "../../components/footer/footer";
import { useCategories } from "../../hooks/useCategories";

const Checkout: FC = () => {
  const { categories } = useCategories();

  return (
    <div>
      <CartProvider>
        <Header
          onSearch={() => {}}
          onCategoryChange={() => {}}
          categories={categories}
          isCheckoutPage={true}
        />
        <Main products={[]} showCheckout={true} />
        <Footer />
      </CartProvider>
    </div>
  );
};

export default Checkout;
