import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "@/constants/routes";
import HomePage from "../home";
import { useCategories } from "@/hooks/useCategories";
import { useProductSearch } from "@/hooks/useProductSearch";
import { useProducts } from "@/hooks/useProducts";

// Mock de los hooks y componentes
jest.mock('@/hooks/useCategories', () => ({
    useCategories: jest.fn(),
}));

jest.mock("@/hooks/useProductSearch", () => ({
  useProductSearch: jest.fn(),
}));

jest.mock("@/hooks/useProducts", () => ({
  useProducts: jest.fn(),
}));

jest.mock("@/components/header/header", () => () => <div>Header</div>);
jest.mock("@/components/footer/footer", () => () => <div>Footer</div>);
jest.mock("@/components/productMain/productMain", () => () => <div>ProductMain</div>);

describe("HomePage", () => {

  it("renders the HomePage component at the correct route", () => {
    render(
      <MemoryRouter initialEntries={[AppRoutes.Home]}>
        <Routes>
          <Route path={AppRoutes.Home} element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  const mockProducts = [
    { id: "1", title: "Product 1", price: 100 },
    { id: "2", title: "Product 2", price: 50 },
  ];

  const mockCategories = [
    { slug: "category-1", name: "Category 1" },
    { slug: "category-2", name: "Category 2" },
  ];

  beforeEach(() => {
    (useCategories as jest.Mock).mockReturnValue({ categories: mockCategories });
    (useProducts as jest.Mock).mockReturnValue({
      products: mockProducts,
      loading: false,
      error: null,
    });
    (useProductSearch as jest.Mock).mockReturnValue({
      filteredProducts: mockProducts,
      handleSearch: jest.fn(),
      handleCategoryChange: jest.fn(),
    });
  });
  
  it("renders loading state", () => {
    (useProducts as jest.Mock).mockReturnValueOnce({
      products: [],
      loading: true,
      error: null,
    });
    render(<HomePage />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    (useProducts as jest.Mock).mockReturnValueOnce({
      products: [],
      loading: false,
      error: "Error loading products",
    });
    render(<HomePage />);
    expect(screen.getByText("Error loading products")).toBeInTheDocument();
  });

  it("renders the Header, ProductMain, and Footer components", () => {
    render(<HomePage />);
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("ProductMain")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
