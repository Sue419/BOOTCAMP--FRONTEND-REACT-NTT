import { FC, useState } from "react";
import { Category } from "../../domain/category";
import SearchBar from "../searchBar/searchBar";
import Sidebar from "../sidebarMenu/sidebar";
import CartIcon from "../cartIcon/cartIcon";
import CategorySelector from "../categorySelector/categorySelector";
import useResponsive from "@/hooks/useResponsive";
import { useAuth } from "@/hooks/useAuth";

import style from "./header.module.css";

const DEFAULT_CATEGORY = "All categories";

interface HeaderProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  categories: Category[];
  isCheckoutPage?: boolean;
}

const Header: FC<HeaderProps> = ({
  onSearch,
  onCategoryChange,
  categories,
  isCheckoutPage = false,
}) => {
  const isMobile = useResponsive(768);
  const { user, logout } = useAuth();

  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);

  // Estado para Sidebar y User Menu
  const [uiState, setUiState] = useState({
    isSidebarOpen: false,
    isUserMenuOpen: false,
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const toggleSidebar = () => {
    setUiState((prev) => ({ ...prev, isSidebarOpen: !prev.isSidebarOpen }));
  };

  const toggleUserMenu = () => {
    setUiState((prev) => ({ ...prev, isUserMenuOpen: !prev.isUserMenuOpen }));
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className={style["header-container"]} role="navigation">
      <div className={style["header-top"]}>
        {isMobile && !isCheckoutPage && (
          <button
            className={style["menu-button"]}
            onClick={toggleSidebar}
            role="button"
          >
            &#9776;
          </button>
        )}

        <Sidebar
          isOpen={uiState.isSidebarOpen}
          closeSidebar={() => toggleSidebar()}
          onCategorySelect={handleCategoryChange}
          categories={categories}
        />

        <a className={style["logo"]}>
          <img src="./src/assets/images/logo/logo.svg" alt="Logo" />
          <h1>My Market</h1>
        </a>

        <div className={style["search-and-icons"]}>
          {!isMobile && !isCheckoutPage && (
            <div className={style["desktop-search"]}>
              <SearchBar onSearch={onSearch} id="desktop-search-input" />
            </div>
          )}
          <div className={style["icons"]}>
            <p className={style["user-name"]}>{`Hola, ${user?.firstName}`}</p>

            <CartIcon />
            <div className={style["user-icon"]} onClick={toggleUserMenu}>
              <img src="./src/assets/icons/user.svg" alt="Usuario" />
              {uiState.isUserMenuOpen && (
                <div className={style["user-menu"]}>
                  <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {!isCheckoutPage && (
        <>
          {isMobile && (
            <div className={style["mobile-search"]}>
              <SearchBar onSearch={onSearch} id="mobile-search-input" />
            </div>
          )}

          {/* Category Dropdown */}
          {!isMobile && (
            <div className={style["header-bottom"]}>
              <CategorySelector
                categories={categories}
                onCategorySelect={handleCategoryChange}
                renderAs="dropdown"
                selectedOption={selectedCategory}
              />
            </div>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
