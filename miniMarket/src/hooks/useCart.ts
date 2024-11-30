import { useContext } from 'react';
import { CartStateContext, CartDispatchContext } from '../context/cart/cartContext';

export const useCart = () => {
    const stateContext = useContext(CartStateContext);
    const dispatchContext = useContext(CartDispatchContext);
  
    if (!stateContext || !dispatchContext) {
      throw new Error('useCart must be used within a CartProvider');
    }
  
    const { cart } = stateContext;
  
    const cartCount = cart?.reduce((total, product) => total + product.quantity, 0) || 0;
  
    return { state: stateContext, dispatch: dispatchContext, cartCount };
  };
  
