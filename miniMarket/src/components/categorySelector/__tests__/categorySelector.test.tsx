import { render, screen, fireEvent } from '@testing-library/react';
import CategorySelector from '../categorySelector';

describe('CategorySelector', () => {
  const categories = [
    { slug: 'cat-1', name: 'Category 1' },
    { slug: 'cat-2', name: 'Category 2' },
    { slug: 'cat-3', name: 'Category 3' },
  ];

  const mockOnCategorySelect = jest.fn();
  const mockToggleMenu = jest.fn();

  it('should render dropdown with categories', () => {
    render(
      <CategorySelector
        categories={categories}
        onCategorySelect={mockOnCategorySelect}
        renderAs="dropdown"
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    categories.forEach((category) => {
      expect(screen.getByRole('option', { name: category.name })).toBeInTheDocument();
    });
  });

  it('should call onCategorySelect when a category is selected from dropdown', () => {
    render(
      <CategorySelector
        categories={categories}
        onCategorySelect={mockOnCategorySelect}
        renderAs="dropdown"
      />
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'cat-2' } });
    expect(mockOnCategorySelect).toHaveBeenCalledWith('cat-2');
  });

  it('should render category menu with categories', () => {
    render(
      <CategorySelector
        categories={categories}
        onCategorySelect={mockOnCategorySelect}
        renderAs="menu"
        isOpen={true}
      />
    );

    const menuItems = screen.getAllByRole('listitem');
    expect(menuItems).toHaveLength(categories.length);
    categories.forEach((category) => {
      expect(screen.getByText(category.name)).toBeInTheDocument();
    });
  });

  it('should call onCategorySelect and toggleMenu when a category is clicked in menu', () => {
    render(
      <CategorySelector
        categories={categories}
        onCategorySelect={mockOnCategorySelect}
        renderAs="menu"
        isOpen={true}
        toggleMenu={mockToggleMenu}
      />
    );

    const menuItem = screen.getByText('Category 2');
    fireEvent.click(menuItem);
    expect(mockOnCategorySelect).toHaveBeenCalledWith('cat-2');
    expect(mockToggleMenu).toHaveBeenCalled();
  });

  it('should not call toggleMenu if toggleMenu is not passed', () => {
    const mockToggleMenu = jest.fn();
    
    render(
      <CategorySelector
        categories={categories}
        onCategorySelect={mockOnCategorySelect}
        renderAs="menu"
        isOpen={true}
      />
    );
  
    const menuItem = screen.getByText('Category 2');
    
    expect(mockToggleMenu).not.toHaveBeenCalled();
    
    fireEvent.click(menuItem);
    
    expect(mockOnCategorySelect).toHaveBeenCalledWith('cat-2');
    expect(mockToggleMenu).not.toHaveBeenCalled();
  });
  
});
