import React, { createContext, useReducer, ReactNode, useEffect } from 'react';
import { CartState, CartDispatch } from './cartTypes';
import { cartReducer } from './cartReducer';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const CartStateContext = createContext<CartState | undefined>(undefined);
export const CartDispatchContext = createContext<CartDispatch | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const initialCartState: CartState = { cart: [] };

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { storedValue: storedCart, setStoredValue: setStoredCart } = useLocalStorage<CartState>(
    'cart',
    initialCartState
  );

  const initialState = storedCart ?? initialCartState;

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Sincroniza estado del carrito con localStorage
  useEffect(() => {
    setStoredCart(state);
  }, [state, setStoredCart]);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};
