import { render, screen, fireEvent } from "@testing-library/react";
import { useCartActions } from "@/context/cart/cartAction";
import SummaryCart from "../summaryCart";
import { calculateDiscountedPrice } from "@/utils/discount";

jest.mock("@/context/cart/cartAction", () => ({
  useCartActions: jest.fn(),
}));

jest.mock("../../../utils/discount", () => ({
  calculateDiscountedPrice: jest.fn(),
}));

describe("SummaryCart", () => {
  const mockCart = [
    {
      id: 1,
      title: "Product 1",
      price: 100,
      discountPercentage: 10,
      quantity: 2,
      image: ["product1.jpg"],
    },
    {
      id: 2,
      title: "Product 2",
      price: 200,
      discountPercentage: 20,
      quantity: 1,
      image: ["product2.jpg"],
    },
  ];

  beforeEach(() => {
    (useCartActions as jest.Mock).mockReturnValue({
      cart: mockCart,
      incrementQuantity: jest.fn(),
      decrementQuantity: jest.fn(),
      removeFromCart: jest.fn(),
    });
    
    (calculateDiscountedPrice as jest.Mock).mockImplementation((price: number, discount: number): number => {
      return price - (price * discount) / 100;
    });
  });

  /*it("should render the cart items correctly", () => {
    render(<SummaryCart />);

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("$90")).toBeInTheDocument();
    expect(screen.getByText("$160")).toBeInTheDocument();
    expect(screen.getByText("Total: $340.00")).toBeInTheDocument();
  });*/

  it("should increment quantity when the increment button is clicked", () => {
    render(<SummaryCart />);

    const incrementButton = screen.getByTestId("increment-button-desktop-1");
    fireEvent.click(incrementButton);

    expect(useCartActions().incrementQuantity).toHaveBeenCalledWith(1);
  });

  it("should decrement quantity when the decrement button is clicked", () => {
    render(<SummaryCart />);

    const decrementButton = screen.getByTestId("decrement-button-desktop-1");
    fireEvent.click(decrementButton);

    expect(useCartActions().decrementQuantity).toHaveBeenCalledWith(1);
  });

  it("should remove product when the remove button is clicked", () => {
    render(<SummaryCart />);

    const removeButton = screen.getByTestId("remove-button-desktop-1");
    fireEvent.click(removeButton);

    expect(useCartActions().removeFromCart).toHaveBeenCalledWith(1);
  });

  it("should update total correctly when quantity changes", () => {
    const updatedMockCart = [
      {
        id: 1,
        title: "Product 1",
        price: 100,
        discountPercentage: 10,
        quantity: 3,
        image: ["product1.jpg"],
      },
      {
        id: 2,
        title: "Product 2",
        price: 200,
        discountPercentage: 20,
        quantity: 1,
        image: ["product2.jpg"],
      },
    ];

    (useCartActions as jest.Mock).mockReturnValue({
      cart: updatedMockCart,
      incrementQuantity: jest.fn(),
      decrementQuantity: jest.fn(),
      removeFromCart: jest.fn(),
    });

    render(<SummaryCart />);

    expect(screen.getByText("Total: $430.00")).toBeInTheDocument();
  });
});
