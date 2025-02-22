import React, { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import style from "./searchBar.module.css"

interface SearchBarProps {
  onSearch: (query: string) => void;
  id: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, id }) => {
  const [query, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300); 
  
  React.useEffect(() => {
    if (debouncedQuery.trim()) {
      onSearch(debouncedQuery.trim());
    }
  }, [debouncedQuery, onSearch]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  

  return (
    <div className={style["search"]}>
      <input
        role="textbox"
        type="search"
        id= {id}
        name="search"
        placeholder="Buscar productos..."
        className="search-input"
        value={query}
        onChange={handleInputChange}
        
      />
      <button className={style["search-button"]} type="button">
        <img src="./src/assets/icons/magnifying_glass.svg" alt="Buscar" />
      </button>
    </div>
  );
};

export default SearchBar;
