import { cartReducer } from '../cart/cartReducer';
import { CartState, CartAction } from '../cart/cartTypes';

describe('cartReducer', () => {
  const initialState: CartState = {
    cart: []
  };

  it('should add an item to the cart', () => {
    const action: CartAction = {
      type: 'ADD_TO_CART',
      payload: { 
        id: 1, 
        title: 'Product 1', 
        price: 100, 
        discountPercentage: 10, 
        quantity: 1, 
        image: ['image1.jpg'] 
      }
    };

    const state = cartReducer(initialState, action);

    expect(state.cart).toHaveLength(1);
    expect(state.cart[0].id).toBe(1);
  });

  it('should remove an item from the cart', () => {
    const initialStateWithItem: CartState = {
      cart: [{ 
        id: 1, 
        title: 'Product 1', 
        price: 100, 
        discountPercentage: 10, 
        quantity: 1, 
        image: ['image1.jpg'] 
      }]
    };

    const action: CartAction = {
      type: 'REMOVE_FROM_CART',
      payload: { productId: 1 }
    };

    const state = cartReducer(initialStateWithItem, action);

    expect(state.cart).toHaveLength(0);
  });

  it('should increment the quantity of a product in the cart', () => {
    const initialStateWithItem: CartState = {
      cart: [{ 
        id: 1, 
        title: 'Product 1', 
        price: 100, 
        discountPercentage: 10, 
        quantity: 1, 
        image: ['image1.jpg'] 
      }]
    };

    const action: CartAction = {
      type: 'INCREMENT',
      payload: { productId: 1 }
    };

    const state = cartReducer(initialStateWithItem, action);

    expect(state.cart[0].quantity).toBe(2);
  });

  it('should decrement the quantity of a product in the cart, but not below 1', () => {
    const initialStateWithItem: CartState = {
      cart: [{ 
        id: 1, 
        title: 'Product 1', 
        price: 100, 
        discountPercentage: 10, 
        quantity: 1, 
        image: ['image1.jpg'] 
      }]
    };

    const action: CartAction = {
      type: 'DECREMENT',
      payload: { productId: 1 }
    };

    const state = cartReducer(initialStateWithItem, action);

    expect(state.cart[0].quantity).toBe(1);
  });

  it('should clear the cart', () => {
    const initialStateWithItems: CartState = {
      cart: [{ 
        id: 1, 
        title: 'Product 1', 
        price: 100, 
        discountPercentage: 10, 
        quantity: 1, 
        image: ['image1.jpg'] 
      }]
    };

    const action: CartAction = {
      type: 'CLEAR_CART',
    };

    const state = cartReducer(initialStateWithItems, action);

    expect(state.cart).toHaveLength(0);
  });

  it('should throw an error if state.cart is not an array', () => {
    const invalidState: any = { cart: null };

    const action: CartAction = {
      type: 'ADD_TO_CART',
      payload: { 
        id: 1, 
        title: 'Product 1', 
        price: 100, 
        discountPercentage: 10, 
        quantity: 1, 
        image: ['image1.jpg'] 
      }
    };

    expect(() => cartReducer(invalidState, action)).toThrow('Error');
  });
});
