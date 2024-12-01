import { render, screen } from "@testing-library/react";
import Checkout from "../checkout";
import { useCategories } from "@/hooks/useCategories";

jest.mock("../../../hooks/useCategories", () => ({
  useCategories: jest.fn(),
}));

jest.mock("../../../components/header/header", () => () => <div>Header</div>);
jest.mock("../../../components/checkoutMain/checkoutMain", () => () => <div>CheckoutMain</div>);
jest.mock("../../../components/footer/footer", () => () => <div>Footer</div>);

describe("Checkout Page", () => {
  const mockCategories = [
    { id: "1", name: "Category 1" },
    { id: "2", name: "Category 2" },
  ];

  beforeEach(() => {
    (useCategories as jest.Mock).mockReturnValue({ categories: mockCategories });
  });

  it("renders the Checkout page components", () => {
    render(<Checkout />);
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("CheckoutMain")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("displays categories in the header", () => {
    render(<Checkout />);
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();
  });
});
