import { FC, useState, useEffect, useRef } from "react";
import CategorySelector from "../categorySelector/categorySelector";
import { useAuth } from "@/hooks/useAuth";
import style from "./sidebar.module.css";
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
  const { user} = useAuth();
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleCategoryMenu = () => {
    setIsCategoryMenuOpen((prevState) => !prevState);
  };

  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
    closeSidebar();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeSidebar]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className={`${style.overlay} ${isOpen ? style.open : style.hidden}`}
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`${style.sidebar} ${isOpen ? style.open : ""}`}
        ref={sidebarRef} // Referencia al contenedor del sidebar
      >
        <div
          className={style["sidebar-content"]}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style["sidebar-header"]}>
            <span> <p className={style["user-name"]}>{`Hi, ${user?.firstName}!`}</p></span>
            <Button className={style["close-button"]} onClick={closeSidebar}>
              &#10005;
            </Button>
          </div>
          <Button
            className={style["categories-toggle"]}
            onClick={(e) => {
              e.stopPropagation();
              toggleCategoryMenu();
            }}
          >
            Categories
          </Button>
          {isCategoryMenuOpen && (
            <div className={style["category-menu-container"]}>
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
      </div>
    </>
  );
};

export default Sidebar;
