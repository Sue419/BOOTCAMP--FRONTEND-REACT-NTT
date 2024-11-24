import { FC } from "react";
import { Product } from "../../domain/product";
import ProductCard from "../productCard/productCard";
import './productList.css'

interface ProductListProps {
  products: Product[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  
  return (
    <div className="product-container">
      {products.length > 0 ? (
        products.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
