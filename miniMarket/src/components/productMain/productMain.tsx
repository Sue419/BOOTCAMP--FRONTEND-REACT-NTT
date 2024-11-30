import { FC } from "react";
import ProductList from "../productList/productList";
import { Product } from "../../domain/product";

interface ProductMainProps {
  products: Product[];
}

const ProductMain: FC<ProductMainProps> = ({ products }) => {
  return (
    <main className="main-container">
      <ProductList products={products} />
    </main>
  );
};

export default ProductMain;
