import { render, screen, fireEvent } from '@testing-library/react';
import CategoryDropdown from '../dropdown';

describe('CategoryDropdown', () => {
  const categories = [
    { slug: 'cat-1', name: 'Category 1' },
    { slug: 'cat-2', name: 'Category 2' },
    { slug: 'cat-3', name: 'Category 3' },
  ];

  const selectedCategory = 'cat-2';
  const mockOnCategorySelect = jest.fn();

  it('should render CategorySelector with dropdown and categories', () => {
    render(
      <CategoryDropdown
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={mockOnCategorySelect}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    categories.forEach((category) => {
      expect(screen.getByRole('option', { name: category.name })).toBeInTheDocument();
    });
  });

  it('should pass the selectedCategory prop to CategorySelector', () => {
    render(
      <CategoryDropdown
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={mockOnCategorySelect}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toHaveValue(selectedCategory);
  });

  it('should call onCategorySelect when a category is selected', () => {
    render(
      <CategoryDropdown
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={mockOnCategorySelect}
      />
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'cat-3' } });
    expect(mockOnCategorySelect).toHaveBeenCalledWith('cat-3');
  });
});
