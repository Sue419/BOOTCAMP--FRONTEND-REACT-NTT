import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartStateContext, CartDispatchContext } from "@/context/cart/cartContext";
import CheckoutForm from "../Form";
import { useModal } from "@/hooks/useModal";
import { useCartActions } from "@/context/cart/cartAction";
import useDistricts from "@/hooks/useDistricts";

// Mock de hooks y funciones
jest.mock("../../../hooks/useModal", () => ({
  useModal: jest.fn(),
}));
jest.mock("@/hooks/useDistricts");
jest.mock("@/context/cart/cartAction");

const mockUseModal = useModal as jest.Mock;
const mockUseDistricts = useDistricts as jest.Mock;
const mockUseCartActions = useCartActions as jest.Mock;

describe("CheckoutForm", () => {
  beforeEach(() => {
    mockUseModal.mockReturnValue({
      isModalVisible: false,
      openModal: jest.fn(),
      closeModal: jest.fn(),
      handleModal: jest.fn(),
    });

    mockUseDistricts.mockReturnValue({
      districts: [{ id: 1, name: "District 1" }, { id: 2, name: "District 2" }],
    });

    mockUseCartActions.mockReturnValue({
      clearCart: jest.fn(),
    });
  });

  it("should render all form fields", () => {
    render(
      <CartStateContext.Provider value={{ cart: [] }}>
        <CartDispatchContext.Provider value={jest.fn()}>
          <MemoryRouter>
            <CheckoutForm />
          </MemoryRouter>
        </CartDispatchContext.Provider>
      </CartStateContext.Provider>
    );

    expect(screen.getByTestId("name-input")).toBeInTheDocument();
    expect(screen.getByTestId("lastname-input")).toBeInTheDocument();
    expect(screen.getByTestId("district-select")).toBeInTheDocument();
    expect(screen.getByTestId("address-input")).toBeInTheDocument();
    expect(screen.getByTestId("reference-input")).toBeInTheDocument();
    expect(screen.getByTestId("phone-input")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("should show error messages when fields are empty", async () => {
    render(
      <CartStateContext.Provider value={{ cart: [] }}>
        <CartDispatchContext.Provider value={jest.fn()}>
          <MemoryRouter>
            <CheckoutForm />
          </MemoryRouter>
        </CartDispatchContext.Provider>
      </CartStateContext.Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText("Name is required.")).toBeInTheDocument();
      expect(screen.getByText("Last name is required.")).toBeInTheDocument();
      expect(screen.getByText("District is required.")).toBeInTheDocument();
      expect(screen.getByText("Address is required.")).toBeInTheDocument();
      expect(screen.getByText("Reference is required.")).toBeInTheDocument();
      expect(screen.getByText("Phone is required.")).toBeInTheDocument();
    });
  });

  /*it("should allow form submission when data is valid", async () => {
    const mockOpenModal = jest.fn();
    const mockCloseModal = jest.fn();

    // Mock del hook useModal
    mockUseModal.mockReturnValueOnce({
      isModalVisible: false,
      openModal: mockOpenModal,
      closeModal: mockCloseModal,
      handleModal: jest.fn(),
    });

    render(
      <MemoryRouter>
        <CheckoutForm />
      </MemoryRouter>
    );

    // Simulamos el llenado del formulario con datos válidos
    fireEvent.change(screen.getByTestId("name-input"), { target: { value: "John" } });
    fireEvent.change(screen.getByTestId("lastname-input"), { target: { value: "Doe" } });
    fireEvent.change(screen.getByTestId("district-select"), { target: { value: "District 1" } });
    fireEvent.change(screen.getByTestId("address-input"), { target: { value: "123 Street" } });
    fireEvent.change(screen.getByTestId("reference-input"), { target: { value: "Near park" } });
    fireEvent.change(screen.getByTestId("phone-input"), { target: { value: "123456789" } });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Esperamos a que la función openModal haya sido llamada

      expect(mockOpenModal).toHaveBeenCalled();

  });*/
});
