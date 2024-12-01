import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CartProvider, CartStateContext, CartDispatchContext } from '../cart/cartContext';
import { CartProduct } from '../cart/cartTypes';

const TestComponent = () => {
  const state = React.useContext(CartStateContext);
  const dispatch = React.useContext(CartDispatchContext);

  if (!state || !dispatch) {
    throw new Error('Context not found');
  }

  const product: CartProduct = {
    id: 1,
    title: 'Product 1',
    price: 100,
    discountPercentage: 10,
    quantity: 1,
    image: [],
  };

  return (
    <>
      <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
        Add Product
      </button>
      <button
        onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { productId: 1 } })}
      >
        Remove Product
      </button>
      <div data-testid="cart">{JSON.stringify(state.cart)}</div>
    </>
  );
};

describe('CartContext', () => {
  it('should add and remove product from cart', () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    // Add product to cart
    fireEvent.click(getByText('Add Product'));
    expect(getByTestId('cart').textContent).toContain('Product 1');

    // Remove product from cart
    fireEvent.click(getByText('Remove Product'));
    expect(getByTestId('cart').textContent).toBe('[]');
  });
});
