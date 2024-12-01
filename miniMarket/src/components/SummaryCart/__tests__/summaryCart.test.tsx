import { render, screen, fireEvent } from "@testing-library/react";
import SummaryCart from "../summaryCart";
import { useCartActions } from "@/context/cart/cartAction";
import { calculateDiscountedPrice } from "@/utils/discount";

jest.mock("@/context/cart/cartAction", () => ({
  useCartActions: jest.fn(),
}));
jest.mock("@/utils/discount", () => ({
  calculateDiscountedPrice: jest.fn(),
}));

describe("SummaryCart", () => {
  const mockCart = [
    {
      id: "1",
      title: "Product 1",
      price: 100,
      discountPercentage: 10,
      quantity: 2,
      image: ["image1.jpg"],
    },
    {
      id: "2",
      title: "Product 2",
      price: 50,
      discountPercentage: 5,
      quantity: 1,
      image: ["image2.jpg"],
    },
  ];

  const mockIncrementQuantity = jest.fn();
  const mockDecrementQuantity = jest.fn();
  const mockRemoveFromCart = jest.fn();

  beforeEach(() => {
    (useCartActions as jest.Mock).mockReturnValue({
      cart: mockCart,
      incrementQuantity: mockIncrementQuantity,
      decrementQuantity: mockDecrementQuantity,
      removeFromCart: mockRemoveFromCart,
    });

    (calculateDiscountedPrice as jest.Mock).mockImplementation(
      (price: number, discountPercentage: number): number =>
        price - (price * discountPercentage) / 100
    );
  });

  it("renders the cart summary title", () => {
    render(<SummaryCart />);
    expect(screen.getByText("Shopping Cart Summary")).toBeInTheDocument();
  });

  it("displays products in the cart", () => {
    render(<SummaryCart />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  it("calculates total price correctly", () => {
    const total = (100 - 100 * 0.1) * 2 + (50 - 50 * 0.05);
    render(<SummaryCart />);
    expect(screen.getByText(`Total: $${total.toFixed(2)}`)).toBeInTheDocument();
  });

  it("increments quantity when '+' button is clicked (desktop)", () => {
    render(<SummaryCart />);
    fireEvent.click(screen.getByTestId("increment-button-1"));
    expect(mockIncrementQuantity).toHaveBeenCalledWith("1");
  });

});