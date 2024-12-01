import { render, screen } from '@testing-library/react';
import ProductCard from '../productCard';
import { Product } from '@/domain/product';
import { CartProvider } from '@/context/cart/cartContext';

jest.mock('../../../utils/truncateText');
jest.mock('../../../utils/discount');

describe('ProductCard', () => {
    const product: Product = {
        id: 1,
        title: 'Test Product',
        brand: 'Test Brand',
        category: 'Electronics',
        description: 'Here. This is a detail description of the product that should be truncated.',
        price: 100,
        discountPercentage: 20,
        stock: 10,
        tags: ['test', 'electronics'],
        image: ['https://image.com/150'],
    };

    it('should render the product card with correct information', () => {
        render(
            <ProductCard product={product} />
        );

        expect(screen.getByText(product.title)).toBeInTheDocument();
        expect(screen.getByText(product.category)).toBeInTheDocument();
    });

    it('should render the add to cart button correctly', async () => {
        render(
            <CartProvider>
                <ProductCard product={product} />
            </CartProvider>
        );
    
        const button = await screen.findByText(/Add to cart/i);
        expect(button).toBeInTheDocument();
    });
});
