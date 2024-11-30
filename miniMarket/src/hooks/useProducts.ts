import { useEffect, useState } from "react";
import { Product } from "../domain/product";
import { fetchProducts } from "../proxy/fetchProducts";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error loading products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
};
