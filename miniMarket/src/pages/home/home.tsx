// HomePage.tsx
import { FC, useState, useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";
import { fetchProducts } from "../../proxy/fetchProducts";
import { CartProvider } from "../../context/cartContext";
import { useSearchAndCategories } from "../../hooks/useSearchAndCategories";
import { Product } from "../../domain/product";

const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    loadProducts();
  }, []);

  const { filteredProducts, categories, handleSearch, handleCategoryChange } = useSearchAndCategories(products);

  return (
    <>
      <CartProvider>
        <Header
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
          categories={categories}
        />
        <Main products={filteredProducts} showCheckout={false} />
      </CartProvider>
      <Footer />
    </>
  );
};


export default HomePage;
