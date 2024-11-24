import { createContext, useState, ReactNode } from "react";
import { Product } from "../domain/product";

interface CartContextProps {
  cart: Product[];
  cartCount: number;
  addToCart: (product: Product) => void;
  getProductById: (productId: string) => Product | undefined;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const getProductById = (productId: string): Product | undefined => {
    return cart.find((product) => product.id.toString() === productId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount: cart.length,
        addToCart,
        getProductById,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };