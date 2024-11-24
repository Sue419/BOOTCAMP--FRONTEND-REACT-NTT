import { FC } from "react";
import { Category } from "../../domain/category";
import './dropdown.css';

interface CategoryDropdownProps {
  categories: Category[];
  selectedOption: string;
  onChange: (categorySlug: string) => void;
}

const CategoryDropdown: FC<CategoryDropdownProps> = ({
  categories,
  selectedOption,
  onChange,
}) => {
  return (
    <div className="dropdown">
      <select
        className="dropdown-select"
        value={selectedOption}
        onChange={(e) => onChange(e.target.value)}
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
