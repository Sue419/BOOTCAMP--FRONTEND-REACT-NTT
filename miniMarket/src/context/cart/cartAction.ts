import { useCartState, useCartDispatch } from './cartHooks';
import { CartProduct } from './cartTypes';

export const useCartActions = () => {
  const state = useCartState();
  const dispatch = useCartDispatch();

  const cart = state.cart ?? [];

  const addToCart = (product: CartProduct) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  };

  const incrementQuantity = (productId: number) => {
    dispatch({ type: 'INCREMENT', payload: { productId } });
  };

  const decrementQuantity = (productId: number) => {
    dispatch({ type: 'DECREMENT', payload: { productId } });
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  };
};
