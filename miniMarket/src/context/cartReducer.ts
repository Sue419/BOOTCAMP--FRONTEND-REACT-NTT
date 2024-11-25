import { CartProduct } from "../domain/product";


export type CartAction =
  | { type: "ADD_TO_CART"; product: CartProduct }
  | { type: "REMOVE_FROM_CART"; productId: number }
  | { type: "INCREMENT"; productId: number }
  | { type: "DECREMENT"; productId: number };

export interface CartState {
  cart: CartProduct[];
}

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingProduct = state.cart.find((p) => p.id === action.product.id);
      if (existingProduct) {
        return {
          cart: state.cart.map((p) =>
            p.id === action.product.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      }
      return {
        cart: [...state.cart, { ...action.product, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter((product) => product.id !== action.productId),
      };

    case "INCREMENT":
      return {
        cart: state.cart.map((product) =>
          product.id === action.productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case "DECREMENT":
      return {
        cart: state.cart.map((product) =>
          product.id === action.productId && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };

    default:
      return state;
  }
};