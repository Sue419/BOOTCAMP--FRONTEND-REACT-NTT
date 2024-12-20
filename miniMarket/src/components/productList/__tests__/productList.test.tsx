import { render, screen } from '@testing-library/react';
import ProductList from '../productList';
import { Product } from '@/domain/product';
import { CartProvider } from '@/context/cart/cartContext';

describe('ProductList', () => {
  const products: Product[] = [
    { 
        id: 1, 
        title: 'Product 1', 
        description: 'Description 1', 
        category: 'Category 1', 
        price: 100, 
        discountPercentage: 10, 
        stock: 50, 
        tags: ['tag1'], 
        image: ['url1'] },
    { 
        id: 2, 
        title: 'Product 2', 
        description: 'Description 2', 
        category: 'Category 2', 
        price: 200, 
        discountPercentage: 20, 
        stock: 30, 
        tags: ['tag2'], 
        image: ['url2'] },
  ];

  it('should render a list of products', () => {
    render(
      <CartProvider>
        <ProductList products={products} itemsPerPage={6} />
      </CartProvider>
    );

    products.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it('should display "No products found" when the product list is empty', () => {
    render(
      <CartProvider>
        <ProductList products={[]} itemsPerPage={6} />
      </CartProvider>
    );
    expect(screen.getByText('No products found.')).toBeInTheDocument();
  });
});
