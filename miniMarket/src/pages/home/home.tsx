import { FC } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";
import { CartProvider } from "../../context/cartContext";
import { useCategories } from "../../hooks/useCategories";
import { useProductSearch } from "../../hooks/useProductSearch";
import { useProducts } from "@/hooks/useProducts";


const HomePage: FC = () => {

  const { products, loading, error } = useProducts();
  const { categories } = useCategories();
  const { filteredProducts, handleSearch, handleCategoryChange } = useProductSearch(products);

  if (loading) {
    return <div>Loading...</div>;
  } if (error) {
    return <div>{error}</div>;
  } 


  return (
    <CartProvider>
      <Header
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        categories={categories}
        isCheckoutPage={false}
      />
      <Main products={filteredProducts} showCheckout={false} />
      <Footer />
    </CartProvider>
  );
};

export default HomePage;
