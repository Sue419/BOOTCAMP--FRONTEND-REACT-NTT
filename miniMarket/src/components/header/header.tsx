import { FC, useState, useEffect } from "react";
import { Category } from "../../domain/category";
import SearchBar from "../searchBar/searchBar";
import CategoryDropdown from "../dropdownSelect/dropdown";
import Sidebar from "../sidebarMenu/sidebar";
import CartIcon from "../cartIcon/cartIcon";
import "./header.css";

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
}) => {
  // textos deben estar en constantes para entender su uso
  const [selectedCategory, setSelectedCategory] = useState(
    "All categories"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    // crear un hook o un util para esto
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header-container">
      <div className="header-top">
        {isMobile && (
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
          {!isMobile && (
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

      <div className="mobile-search">
        <SearchBar onSearch={onSearch} id="mobile-search-input" />
      </div>

      <div className="header-bottom">
        {!isMobile && (
          <CategoryDropdown
            categories={categories}
            selectedOption={selectedCategory}
            onChange={handleCategoryChange}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
