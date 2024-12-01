import { render, screen, fireEvent } from "@testing-library/react";
import AddToCartButton from "../buttonCard";
import { CartProvider } from "@/context/cart/cartContext";
import { Product } from "@/domain/product";
import { useCartActions } from "@/context/cart/cartAction";

jest.mock("@/context/cart/cartAction", () => ({
  useCartActions: jest.fn(),
}));

describe("AddToCartButton", () => {
  const mockAddToCart = jest.fn();

  beforeEach(() => {
    (useCartActions as jest.Mock).mockReturnValue({
      addToCart: mockAddToCart,
    });
  });

  it("should render the Add to Cart button", () => {
    const product: Product = {
      id: 1,
      title: "Test Product",
      price: 100,
      description: "Test description",
      category: "Test category",
      discountPercentage: 10,
      stock: 50,
      image: ["test-image-url"],
      tags: [],
    };

    render(
      <CartProvider>
        <AddToCartButton product={product} />
      </CartProvider>
    );

    const button = screen.getByRole("button", { name: /add to cart/i });
    expect(button).toBeInTheDocument();
  });

  it("should call addToCart with the correct product when clicked", () => {
    const product: Product = {
      id: 1,
      title: "Test Product",
      price: 100,
      description: "Test description",
      category: "Test category",
      discountPercentage: 10,
      stock: 50,
      image: ["test-image-url"],
      tags: [],
    };

    render(
      <CartProvider>
        <AddToCartButton product={product} />
      </CartProvider>
    );

    const button = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(button);

    expect(mockAddToCart).toHaveBeenCalledWith({
      ...product,
      quantity: 1,
    });
  });

  it("should render cart icon inside the button", () => {
    const product: Product = {
      id: 1,
      title: "Test Product",
      price: 100,
      description: "Test description",
      category: "Test category",
      discountPercentage: 10,
      stock: 50,
      image: ["test-image-url"],
      tags: [],
    };

    render(
      <CartProvider>
        <AddToCartButton product={product} />
      </CartProvider>
    );

    const icon = screen.getByAltText(/cart icon/i);
    expect(icon).toBeInTheDocument();
  });
});
