import { useEffect, createContext, useReducer, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage"; // Asegúrate de importar correctamente
import { Product, CartProduct } from "../domain/product";
import { cartReducer } from "./cartReducer";


interface CartContextProps {
  cart: CartProduct[];
  cartCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  getProductById: (productId: number) => CartProduct | undefined;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { setStoredValue, storedValue } = useLocalStorage<CartProduct[]>("cart", []);

  // storedValue estado inicial
  const [state, dispatch] = useReducer(cartReducer, {
    cart: storedValue || [],
  });

  useEffect(() => {
    setStoredValue(state.cart);
  }, [state.cart, setStoredValue]);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", product: { ...product, quantity: 1 } });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", productId });
  };

  const incrementQuantity = (productId: number) => {
    dispatch({ type: "INCREMENT", productId });
  };

  const decrementQuantity = (productId: number) => {
    dispatch({ type: "DECREMENT", productId });
  };

  const getProductById = (productId: number): CartProduct | undefined => {
    return state.cart.find((product) => product.id === productId);
  };

  // el provider solo deber'ia exportar el valor en memoria y el despachador para que sea el consumidor que sea el encargado de usarlo seg'un lo necesite, no es necesario definir funciones generales que siempre esten presente aunque no se usen en todas las p'aginas
  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        cartCount: state.cart.reduce((count, product) => count + product.quantity, 0),
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        getProductById,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
