import { CartState, CartAction } from './cartTypes';

export const cartReducer = (state: CartState, action: CartAction): CartState => {

  if (!Array.isArray(state.cart)) {
    throw new Error('Error');
  }
  
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload.productId),
      };
    case 'INCREMENT':
      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === action.payload.productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case 'DECREMENT':
      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === action.payload.productId
            ? { ...product, quantity: Math.max(1, product.quantity - 1) }
            : product
        ),
      };
    default:
      throw new Error('Unknown action type');
  }
};
