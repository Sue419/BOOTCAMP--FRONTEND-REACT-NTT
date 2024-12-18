import { FC } from "react";
import { Category } from "../../domain/category";
import CategoryDropdown from "../dropdownSelect/dropdown";

interface CategorySelectorProps {
  categories: Category[];
  onCategorySelect: (categorySlug: string) => void;
  renderAs: "menu" | "dropdown";
  isOpen?: boolean;
  toggleMenu?: () => void;
  selectedOption?: string;
}

const CategorySelector: FC<CategorySelectorProps> = ({
  categories,
  onCategorySelect,
  renderAs,
  //isOpen = false,
  toggleMenu,
  selectedOption,
}) => {
  if (renderAs === "dropdown") {
    return (
      <CategoryDropdown
        categories={categories}
        selectedCategory={selectedOption || ""}
        onCategorySelect={onCategorySelect}
      />
    );
  }

  return (
    <div className="category-menu">
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category.slug}
            onClick={() => {
              onCategorySelect(category.slug);
              if (toggleMenu) {
                toggleMenu();
              }
            }}
            className="category-item"
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelector;
