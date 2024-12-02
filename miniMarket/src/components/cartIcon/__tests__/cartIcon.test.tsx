import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CartIcon from '../cartIcon';
import { CartProvider } from '@/context/cart/cartContext';

// Mock de useCart
jest.mock('@/hooks/useCart', () => ({
  useCart: () => ({
    cartCount: 5,
  }),
}));

describe('CartIcon', () => {
  it('should render the cart icon and navigate to checkout', () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <CartIcon />
        </CartProvider>
      </MemoryRouter>
    );

    const cartIcon = screen.getByAltText(/cart/i);
    expect(cartIcon).toBeInTheDocument();
  });

  it('should show the correct cart count', () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <CartIcon />
        </CartProvider>
      </MemoryRouter>
    );

    const cartCount = screen.getByText('5');
    expect(cartCount).toBeInTheDocument();
  });

  it('should navigate to the checkout page when clicked', () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <CartIcon />
        </CartProvider>
      </MemoryRouter>
    );

    const cartIconLink = screen.getByRole('link');
    expect(cartIconLink).toHaveAttribute('href', '/checkout');
  });
});
