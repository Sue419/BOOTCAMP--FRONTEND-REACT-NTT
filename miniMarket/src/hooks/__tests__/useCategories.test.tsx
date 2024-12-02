import { renderHook, waitFor } from '@testing-library/react';
import { useCategories } from '../useCategories';
import * as fetchCategories from '../../proxy/fetchCategories';

jest.mock('../../proxy/fetchCategories', () => ({
  fetchCategories: jest.fn(() => {
    return Promise.resolve([]);
  }),
}));

describe('useCategories', () => {
  it('should load categories correctly', async () => {
    const mockCategories = [
        { slug: 'cat1', name: 'Category 1' },
        { slug: 'cat2', name: 'Category 2' },
    ];

    (fetchCategories.fetchCategories as jest.Mock).mockResolvedValue(mockCategories);

    const { result } = renderHook(() => useCategories());

    await waitFor(() => result.current.categories.length > 1);

    expect(result.current.categories).toEqual([
        { slug: '', name: 'All categories' },
        ...mockCategories,
    ]);
});


  it('should handle error loading categories', async () => {
    (fetchCategories.fetchCategories as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    const { result } = renderHook(() => useCategories());

    await waitFor(() => result.current.categories.length === 1);

    expect(result.current.categories).toEqual([{ slug: '', name: 'All categories' }]);
  });
});
