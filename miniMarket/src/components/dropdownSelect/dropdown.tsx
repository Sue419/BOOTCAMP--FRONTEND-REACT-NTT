import { FC } from "react";
import { Category } from "../../domain/category";
import style from "./dropdown.module.css";

interface CategoryDropdownProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categorySlug: string) => void;
}

const CategoryDropdown: FC<CategoryDropdownProps> = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className={style.dropdown}>
      <select
        className={style["dropdown-select"]}
        value={selectedCategory}
        onChange={(e) => onCategorySelect(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
