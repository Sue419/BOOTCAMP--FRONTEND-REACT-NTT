export type CartProduct = {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    quantity: number;
    image: string[];
  };
  
  export type CartState = {
    cart: CartProduct[];
  };
  
  export type CartAction =
    | { type: "ADD_TO_CART"; payload: CartProduct }
    | { type: "REMOVE_FROM_CART"; payload: { productId: number } }
    | { type: "INCREMENT"; payload: { productId: number } }
    | { type: "DECREMENT"; payload: { productId: number } }
    | { type: "CLEAR_CART" };
  
  export type CartDispatch = (action: CartAction) => void;
  