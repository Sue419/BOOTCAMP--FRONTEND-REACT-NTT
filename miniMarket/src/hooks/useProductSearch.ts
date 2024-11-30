import { useState, useCallback, useEffect } from "react";
import { filterProducts } from "../logic/productFilter";
import { Product } from "../domain/product";

export const useProductSearch = (initialProducts: Product[]) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    setFilteredProducts(initialProducts);
  }, [initialProducts]);

  const handleSearch = useCallback(
    (query: string) => {
      const filtered = filterProducts(query, initialProducts);
      setFilteredProducts(filtered);
    },
    [initialProducts]
  );

  const handleCategoryChange = useCallback(
    (categorySlug: string) => {
      if (categorySlug === "") {
        setFilteredProducts(initialProducts);
      } else {
        const filtered = initialProducts.filter((product) => product.category === categorySlug);
        setFilteredProducts(filtered);
      }
    },
    [initialProducts]
  );

  return {
    filteredProducts,
    handleSearch,
    handleCategoryChange,
  };
};
