// useSearchAndCategories.ts
import { useState, useEffect, useCallback } from "react";
import { filterProducts } from "../logic/search";
import { Product } from "../domain/product";
import { fetchCategories } from "../proxy/fetchCategories";

export const useSearchAndCategories = (initialProducts: Product[]) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<{ slug: string; name: string }[]>([]);

  // Cargar categorías
  useEffect(() => {
    const loadCategories = async () => {
      const categoriesData = await fetchCategories();
      const categoryNames = categoriesData.map((category) => ({
        slug: category.slug,
        name: category.name,
      }));
      setCategories([{ slug: '', name: 'All categories' }, ...categoryNames]);
    };

    loadCategories();
  }, []);

  // Actualizar productos
  useEffect(() => {
    if (initialProducts.length > 0) {
      setFilteredProducts(initialProducts);
    }
  }, [initialProducts]);

  const handleSearch = useCallback(
    (query: string) => {
      const filtered = filterProducts(query, initialProducts);
      setFilteredProducts(filtered);
    },
    [initialProducts]
  );

  const handleCategoryChange = (categorySlug: string) => {
    if (categorySlug === '') {
      setFilteredProducts(initialProducts);
    } else {
      const filtered = initialProducts.filter(product => product.category === categorySlug);
      setFilteredProducts(filtered);
    }
  };

  return {
    filteredProducts,
    categories,
    handleSearch,
    handleCategoryChange
  };
};
