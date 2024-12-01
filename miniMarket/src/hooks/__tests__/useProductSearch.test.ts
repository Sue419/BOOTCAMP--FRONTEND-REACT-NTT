import { renderHook, act } from '@testing-library/react';
import { useProductSearch } from '../useProductSearch';
import { Product } from '@/domain/product';

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'ProductOne',
    category: 'cat1',
    description: 'Description of ProductOne',
    price: 100,
    discountPercentage: 10,
    stock: 20,
    image: ['product1.jpg'],
    tags: ['tag1', 'tag2'],
  },
  {
    id: 2,
    title: 'ProductTwo',
    category: 'cat2',
    description: 'Description of ProductTwo',
    price: 200,
    discountPercentage: 15,
    stock: 30,
    image: ['product2.jpg'],
    tags: ['tag3', 'tag4'],
  },
];

describe('useProductSearch', () => {
  it('should filter products by search query', () => {
    const { result } = renderHook(() => useProductSearch(mockProducts));

    act(() => {
      result.current.handleSearch('ProductOne');
    });

    expect(result.current.filteredProducts).toEqual([mockProducts[0]]);
  });

  it('should filter products by category', () => {
    const { result } = renderHook(() => useProductSearch(mockProducts));

    act(() => {
      result.current.handleCategoryChange('cat1');
    });

    expect(result.current.filteredProducts).toEqual([mockProducts[0]]);
  });
});
