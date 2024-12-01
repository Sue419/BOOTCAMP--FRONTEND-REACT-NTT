import { renderHook } from '@testing-library/react';
import { CartStateContext, CartDispatchContext } from '@/context/cart/cartContext';
import { useCart } from '../useCart';

describe('useCart', () => {
  it('should throw an error if used outside of CartProvider', () => {
    let caughtError: Error | null = null;

    try {
      renderHook(() => useCart());
    } catch (error) {
      caughtError = error as Error;
    }

    expect(caughtError).toEqual(new Error('useCart must be used within a CartProvider'));
  });

  it('should return state and dispatch from context', () => {
    const mockState = {
      cart: [
        { id: 1, title: 'Product 1', price: 100, discountPercentage: 10, quantity: 2, image: [] },
        { id: 2, title: 'Product 2', price: 200, discountPercentage: 15, quantity: 1, image: [] },
      ],
    };

    const mockDispatch = jest.fn();

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartStateContext.Provider value={mockState}>
        <CartDispatchContext.Provider value={mockDispatch}>
          {children}
        </CartDispatchContext.Provider>
      </CartStateContext.Provider>
    );

    const { result } = renderHook(() => useCart(), { wrapper });

    expect(result.current.state).toEqual(mockState);
    expect(result.current.dispatch).toBe(mockDispatch);
    expect(result.current.cartCount).toBe(3);
  });
});
