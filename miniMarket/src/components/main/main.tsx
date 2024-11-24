import { FC } from "react";
import ProductList from "../productList/productList";
import { Product } from "../../domain/product";

interface MainProps {
  products: Product[];
}

const Main: FC<MainProps> = ({ products }) => {
  return (
    <main className="main-container">
      <ProductList products={products} />
    </main>
  );
};

export default Main;
