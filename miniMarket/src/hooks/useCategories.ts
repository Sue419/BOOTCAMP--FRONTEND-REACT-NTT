import { useState, useEffect } from "react";
import { fetchCategories } from "../proxy/fetchCategories";

const DEFAULT_CATEGORY = { slug: "", name: "All categories" };

export const useCategories = () => {
  const [categories, setCategories] = useState<{ slug: string; name: string }[]>([DEFAULT_CATEGORY]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories([DEFAULT_CATEGORY, ...categoriesData]);
      } catch (error) {
        console.error("Error loading categories:", error);
        setCategories([DEFAULT_CATEGORY]);
      }
    };

    loadCategories();
  }, []);

  return { categories, defaultCategory: DEFAULT_CATEGORY };
};
