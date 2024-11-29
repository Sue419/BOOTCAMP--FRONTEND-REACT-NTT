// components/sidebar/sidebar.tsx
import { FC, useState } from "react";
import CategorySelector from "../categorySelector/categorySelector";
import "./sidebar.css";
import { Button } from "../shared/button/button";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
  onCategorySelect: (category: string) => void;
  categories: { slug: string; name: string }[];
}

const Sidebar: FC<SidebarProps> = ({
  isOpen,
  closeSidebar,
  onCategorySelect,
  categories,
}) => {
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const toggleCategoryMenu = () => {
    setIsCategoryMenuOpen((prevState) => !prevState);
  };

  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
    closeSidebar();
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`} onClick={closeSidebar}>
      <div className="sidebar-header">
        <span>¡Hola!</span>
        <Button className="close-button" onClick={closeSidebar}>
          &#10005;
        </Button>
      </div>
      <Button
        className="categories-toggle"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          toggleCategoryMenu();
        }}
      >
        Categories
      </Button>
      {isCategoryMenuOpen && (
        <div className="category-menu-container">
          <CategorySelector
          categories={categories}
          onCategorySelect={handleCategorySelect}
          renderAs="menu"
          isOpen={isCategoryMenuOpen}
          toggleMenu={toggleCategoryMenu}
        />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
