import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Checkout from "../checkout";
import { useCategories } from "@/hooks/useCategories";
import { AppRoutes } from "@/constants/routes";

// Mock de los hooks y componentes
jest.mock("@/hooks/useCategories", () => ({
  useCategories: jest.fn(),
}));

jest.mock("@/components/header/header", () => () => <div>Header</div>);
jest.mock("@/components/checkoutMain/checkoutMain", () => () => <div>CheckoutMain</div>);
jest.mock("@/components/footer/footer", () => () => <div>Footer</div>);

describe("CheckoutPage", () => {
  const mockCategories = [
    { slug: "category-1", name: "Category 1" },
    { slug: "category-2", name: "Category 2" },
  ];

  beforeEach(() => {
    (useCategories as jest.Mock).mockReturnValue({ categories: mockCategories });
  });

  it("does not render the search bar or category selection", () => {
    render(
      <MemoryRouter initialEntries={["/checkout"]}> {/* Usar MemoryRouter para simular la ruta */}
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(screen.queryByText("Category 1")).not.toBeInTheDocument();
  });

  it("does not render the sidebar in mobile view", () => {
    // Simula la vista móvil
    global.innerWidth = 375;
    global.dispatchEvent(new Event("resize"));
    render(
      <MemoryRouter initialEntries={["/checkout"]}> {/* Usar MemoryRouter para simular la ruta */}
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByText("Header")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /menu/i })).not.toBeInTheDocument();
  });

  it("renders CheckoutMain and Footer components", () => {
    render(
      <MemoryRouter initialEntries={[AppRoutes.Checkout]}>
        <Routes>
          <Route path={AppRoutes.Checkout} element={<Checkout />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("CheckoutMain")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
