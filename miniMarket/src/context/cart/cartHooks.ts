import { useContext } from 'react';
import { CartState, CartDispatch } from './cartTypes';
import { CartStateContext, CartDispatchContext } from './cartContext';


export const useCartState = (): CartState => {
  const context = useContext(CartStateContext);
  if (!context) {
    throw new Error('useCartState must be used within a CartProvider');
  }
  return context;
};

export const useCartDispatch = (): CartDispatch => {
  const context = useContext(CartDispatchContext);
  if (!context) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
};
