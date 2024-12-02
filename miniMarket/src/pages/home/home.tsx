import { FC } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ProductMain from "@/components/productMain/productMain";
import { CartProvider } from "../../context/cart/cartContext";
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
      <ProductMain products={filteredProducts} role="main"/>
      <Footer />
    </CartProvider>
  );
};

export default HomePage;
