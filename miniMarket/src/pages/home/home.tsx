import { FC, useState, useEffect, useCallback } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";
import { fetchProducts } from "../../proxy/fetchProducts";
import { fetchCategories } from "../../proxy/fetchCategories";
import { filterProducts } from "../../logic/search";
import { Product } from "../../domain/product";
import { CartProvider } from "../../context/cartContext";

const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<{ slug: string; name: string }[]>([]);

  useEffect(() => {
    const loadProductsAndCategories = async () => {
      const productsData = await fetchProducts();
      const categoriesData = await fetchCategories();
  
      setProducts(productsData);
      setFilteredProducts(productsData);
  
      const categoryNames = categoriesData.map((category) => ({
        slug: category.slug,
        name: category.name,
      }));
      setCategories([{ slug: '', name: 'All categories' }, ...categoryNames]);
    };
  
    loadProductsAndCategories();
  }, []);
  

  const handleSearch = useCallback(
    (query: string) => {
      const filtered = filterProducts(query, products);
      setFilteredProducts(filtered);
    },
    [products]
  );

  const handleCategoryChange = (categorySlug: string) => {
    if (categorySlug === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === categorySlug);
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <CartProvider>
        <Header
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
          categories={categories}
        />
      
        <Main products={filteredProducts} />
      </CartProvider>
      <Footer />
    </>
  );
};


export default HomePage;
