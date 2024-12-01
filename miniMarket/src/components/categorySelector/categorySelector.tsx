import { FC } from "react";
import { Category } from "../../domain/category";

interface CategorySelectorProps {
  categories: Category[];
  onCategorySelect: (categorySlug: string) => void;
  renderAs: "menu" | "dropdown";
  isOpen?: boolean;
  toggleMenu?: () => void;
  selectedOption?: string;
  orientation?: "horizontal" | "vertical";
}

const CategorySelector: FC<CategorySelectorProps> = ({
  categories,
  onCategorySelect,
  renderAs,
  isOpen = false,
  toggleMenu,
  selectedOption,
}) => {
  if (renderAs === "dropdown") {
    return (
      <div className="dropdown">
        <select
          className="dropdown-select"
          value={selectedOption}
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
  }

  return (
    <div
      className={`category-menu ${isOpen ? "open" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
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
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelector;
