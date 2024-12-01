import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../header';
import { Category } from '@/domain/category';

describe('Header', () => {
  const mockCategories: Category[] = [
    {name: 'Category 1', slug: 'category-1', },
    {name: 'Category 2', slug: 'category-2', },
  ];
  
  const mockOnSearch = jest.fn();
  const mockOnCategoryChange = jest.fn();

  it('should render the logo', () => {
    render(
      <Header 
        onSearch={mockOnSearch}
        onCategoryChange={mockOnCategoryChange}
        categories={mockCategories}
      />
    );

    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('should call onSearch when search query is entered', () => {
    render(
      <Header 
        onSearch={mockOnSearch}
        onCategoryChange={mockOnCategoryChange}
        categories={mockCategories}
      />
    );

    const searchInput = screen.getByRole('textbox', { name: /search/i });
    fireEvent.change(searchInput, { target: { value: 'Test' } });

    expect(mockOnSearch).toHaveBeenCalledWith('Test');
  });

  it('should display a sidebar in mobile view when menu button is clicked', () => {
    render(
      <Header 
        onSearch={mockOnSearch}
        onCategoryChange={mockOnCategoryChange}
        categories={mockCategories}
        isCheckoutPage={false}
      />
    );

    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);

    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toBeInTheDocument();
  });

  it('should not display the menu button on the checkout page', () => {
    render(
      <Header 
        onSearch={mockOnSearch}
        onCategoryChange={mockOnCategoryChange}
        categories={mockCategories}
        isCheckoutPage={true}
      />
    );

    const menuButton = screen.queryByRole('button', { name: /menu/i });
    expect(menuButton).not.toBeInTheDocument();
  });

  it('should update the selected category when a new category is selected', () => {
    render(
      <Header 
        onSearch={mockOnSearch}
        onCategoryChange={mockOnCategoryChange}
        categories={mockCategories}
      />
    );

    const categoryDropdown = screen.getByRole('combobox');
    fireEvent.change(categoryDropdown, { target: { value: 'Category 1' } });

    expect(mockOnCategoryChange).toHaveBeenCalledWith('Category 1');
  });

  it('should display the mobile search input on mobile view', () => {
    render(
      <Header 
        onSearch={mockOnSearch}
        onCategoryChange={mockOnCategoryChange}
        categories={mockCategories}
      />
    );

    const mobileSearchInput = screen.getByRole('textbox', { name: /search/i });
    expect(mobileSearchInput).toBeInTheDocument();
  });

  it('should display the category dropdown for desktop', () => {
    render(
      <Header 
        onSearch={mockOnSearch}
        onCategoryChange={mockOnCategoryChange}
        categories={mockCategories}
      />
    );

    const categoryDropdown = screen.getByRole('combobox');
    expect(categoryDropdown).toBeInTheDocument();
  });

  it('should call onCategoryChange when category is selected', () => {
    render(
      <Header 
        onSearch={mockOnSearch}
        onCategoryChange={mockOnCategoryChange}
        categories={mockCategories}
      />
    );

    const categoryDropdown = screen.getByRole('combobox');
    fireEvent.change(categoryDropdown, { target: { value: 'Category 1' } });

    expect(mockOnCategoryChange).toHaveBeenCalledWith('Category 1');
  });
});
