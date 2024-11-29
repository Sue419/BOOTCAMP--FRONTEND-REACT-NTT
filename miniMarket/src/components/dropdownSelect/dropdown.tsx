import { FC } from "react";
import { Category } from "@/domain/category";
import CategorySelector from "../categorySelector/categorySelector";
import './dropdown.css';

interface CategoryDropdownProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categorySlug: string) => void;
}

const CategoryDropdown: FC<CategoryDropdownProps> = ({ categories, selectedCategory, onCategorySelect }) => {

  return (
    <CategorySelector
      categories={categories}
      onCategorySelect={onCategorySelect}
      renderAs="dropdown"
      selectedOption={selectedCategory}
    />
  );
};

export default CategoryDropdown;
