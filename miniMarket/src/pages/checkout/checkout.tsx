import { FC } from "react";
import { CartProvider } from "../../context/cartContext";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Footer from "../../components/footer/footer";
import { useCategories } from "../../hooks/useCategories";

const Checkout: FC = () => {
  const { categories } = useCategories(); // Usamos categorías solo si es necesario en el Header

  return (
    <div>
      <CartProvider>
        <Header
          onSearch={() => {}} // No se necesita lógica de búsqueda
          onCategoryChange={() => {}} // No se necesita lógica de filtrado
          categories={categories} // Pasamos categorías aunque el Header no las muestre en Checkout
          isCheckoutPage={true} // Indicamos que es la vista de Checkout
        />
        <Main products={[]} showCheckout={true} />
        <Footer />
      </CartProvider>
    </div>
  );
};

export default Checkout;
