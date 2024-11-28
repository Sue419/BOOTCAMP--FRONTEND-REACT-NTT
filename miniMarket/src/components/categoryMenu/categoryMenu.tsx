// components/categoryMenu/categoryMenu.tsx
import { FC } from "react";
import { Category } from "../../domain/category";
import "./categoryMenu.css";

interface CategoryMenuProps {
  categories: Category[];
  onCategorySelect: (categorySlug: string) => void;
  isOpen: boolean;
  toggleMenu?: () => void;
  orientation?: "horizontal" | "vertical";
}

const CategoryMenu: FC<CategoryMenuProps> = ({
  categories,
  onCategorySelect,
  isOpen,
  toggleMenu,
  orientation = "vertical",
}) => {
    
  return (
    <div
      className={`category-menu ${isOpen ? "open" : ""} ${orientation}`}
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category.slug}
            onClick={() => {
              onCategorySelect(category.slug);
              // por qu'e?
              toggleMenu?.();
            }}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
