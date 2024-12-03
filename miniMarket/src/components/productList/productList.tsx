import { FC } from "react";
import { Product } from "../../domain/product";
import ProductCard from "../productCard/productCard";
import { usePagination } from "@/hooks/usePagination";
import './productList.css'

interface ProductListProps {
  products: Product[];
  itemsPerPage: number;
}

const ProductList: FC<ProductListProps> = ({ products, itemsPerPage  }) => {
  const { currentItems, nextPage, prevPage, totalPages } = usePagination(products, itemsPerPage);
  
  return (
    <div className="product-container">
      {currentItems.length > 0 ? (
        currentItems.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <p>No products found.</p>
      )}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentItems.length === 0}>
          Previous
        </button>
        <span>Page {currentItems.length > 0 ? Math.ceil((products.indexOf(currentItems[0]) + 1) / itemsPerPage) : 1} of {totalPages}</span>
        <button onClick={nextPage} disabled={currentItems.length === 0}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
