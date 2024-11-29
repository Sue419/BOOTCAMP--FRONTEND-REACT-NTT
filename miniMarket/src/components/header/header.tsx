import { FC, useState, } from "react";
import { Category } from "../../domain/category";
import SearchBar from "../searchBar/searchBar";
import CategoryDropdown from "../dropdownSelect/dropdown";
import Sidebar from "../sidebarMenu/sidebar";
import CartIcon from "../cartIcon/cartIcon";
import useResponsive from "@/hooks/useResponsive";
import "./header.css";

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
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="header-container">
      <div className="header-top">
        {isMobile && !isCheckoutPage && (
          <button className="menu-button" onClick={toggleSidebar}>
            &#9776;
          </button>
        )}

        <Sidebar
          isOpen={isSidebarOpen}
          closeSidebar={closeSidebar}
          onCategorySelect={handleCategoryChange}
          categories={categories}
        />

        <div className="logo">
          <img src="./src/assets/images/logo/logo.svg" alt="Logo" />
          <h1>My Market</h1>
        </div>

        <div className="search-and-icons">
          {!isMobile && !isCheckoutPage && (
            <div className="desktop-search">
              <SearchBar onSearch={onSearch} id="desktop-search-input" />
            </div>
          )}
          <div className="icons">
            <CartIcon />
            <div className="user-icon">
              <img src="./src/assets/icons/user.svg" alt="Usuario" />
            </div>
          </div>
        </div>
      </div>

      {!isCheckoutPage && (
        <>
          <div className="mobile-search">
            {isMobile && (
              <SearchBar onSearch={onSearch} id="mobile-search-input" />
            )}
          </div>
          <div className="header-bottom">
            {!isMobile && (
              <CategoryDropdown
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategoryChange}
              />
            )}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
