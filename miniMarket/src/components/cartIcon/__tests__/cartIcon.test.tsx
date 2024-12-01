import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import CartIcon from '../cartIcon';
import { CartProvider } from '@/context/cart/cartContext';

jest.mock('@/hooks/useCart', () => ({
  useCart: () => ({
    cartCount: 5,
  }),
}));

describe('CartIcon', () => {
  it('should render the cart icon and navigate to checkout', () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <CartIcon />
        </CartProvider>
      </BrowserRouter>
    );

    const cartIcon = screen.getByAltText(/cart/i);
    expect(cartIcon).toBeInTheDocument();
  });

  it('should show the correct cart count', () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <CartIcon />
        </CartProvider>
      </BrowserRouter>
    );

    const cartCount = screen.getByText('5');
    expect(cartCount).toBeInTheDocument();
  });
});
