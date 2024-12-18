import { FC } from "react";
import ProductList from "../productList/productList";
import { Product } from "../../domain/product";
import style from "./productMain.module.css"

interface ProductMainProps {
  products: Product[];
  role?: string;
}

const ProductMain: FC<ProductMainProps> = ({ products }) => {
  return (
    <main className={style["main-container"]}>
      <ProductList products={products} itemsPerPage={6} />
    </main>
  );
};

export default ProductMain;
