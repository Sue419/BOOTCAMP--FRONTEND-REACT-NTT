// components/sidebar/sidebar.tsx
import { FC, useState } from "react";
import CategoryMenu from "../categoryMenu/categoryMenu";
import "./sidebar.css";

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

  // Modificación aquí: al seleccionar una categoría, también cerramos el sidebar
  const handleCategorySelect = (category: string) => {
    onCategorySelect(category); // Llamada a onCategorySelect
    closeSidebar(); // Cerrar el sidebar al seleccionar la categoría
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`} onClick={closeSidebar}>
      {/* Encabezado con saludo y botón de cerrar */}
      <div className="sidebar-header">
        <span>¡Hola!</span>
        <button className="close-button" onClick={closeSidebar}>
          &#10005;
        </button>
      </div>

      {/* Botón para mostrar el menú de categorías */}
      <button
        className="categories-toggle"
        onClick={(e) => {
          e.stopPropagation();
          toggleCategoryMenu();
        }}
      >
        Categorías
      </button>

      {/* Menú de categorías, con scroll en caso de lista larga */}
      {isCategoryMenuOpen && (
        <div className="category-menu-container">
          <CategoryMenu
            categories={categories}
            onCategorySelect={handleCategorySelect}
            isOpen={isCategoryMenuOpen}
            toggleMenu={toggleCategoryMenu}
            orientation="vertical"
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
