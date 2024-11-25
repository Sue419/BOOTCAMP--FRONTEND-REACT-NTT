import { FC } from "react";
import { CartProvider } from "../../context/cartContext";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Footer from "../../components/footer/footer";
import { useSearchAndCategories } from "../../hooks/useSearchAndCategories";

const Checkout: FC = () => {
  const { categories, handleSearch, handleCategoryChange } =
    useSearchAndCategories([]);

  return (
    <div>
      <CartProvider>
        <Header
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
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
