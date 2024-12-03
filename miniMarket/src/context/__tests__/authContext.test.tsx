import { render, act, fireEvent, } from "@testing-library/react";
import { AuthProvider } from "../auth/authContext";
import { AuthContext, AuthContextProps } from "../auth/authContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";

jest.mock("@/hooks/useLocalStorage");

beforeEach(() => {
  (useLocalStorage as jest.Mock).mockImplementation((key, initialValue) => {
    if (key === "authToken") {
      return { storedValue: "mockedToken", setStoredValue: jest.fn() };
    }
    if (key === "authUser") {
      return {
        storedValue: JSON.stringify({
          id: 1,
          username: "emily",
          email: "emily@example.com",
          firstName: "Emily",
          lastName: "Doe",
          image: "image.jpg",
        }),
        setStoredValue: jest.fn(),
      };
    }
    return { storedValue: initialValue, setStoredValue: jest.fn() };
  });
});

describe("AuthContext", () => {
  it("should initialize context with stored token and user", async () => {
    let contextValue: AuthContextProps | undefined;

    await act(async () => {
      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              contextValue = value;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );
    });

    expect(contextValue?.state.token).toBe("mockedToken");
    expect(contextValue?.state.user).toEqual({
      id: 1,
      username: "emily",
      email: "emily@example.com",
      firstName: "Emily",
      lastName: "Doe",
      image: "image.jpg",
    });
  });
  
  it("should update context on logout", async () => {
    let contextValue: AuthContextProps | undefined;

    const { getByText } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => {
            contextValue = value;
            return (
              <button onClick={() => value?.dispatch({ type: "LOGOUT" })}>
                Logout
              </button>
            );
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    const button = getByText("Logout");
    fireEvent.click(button);

    expect(contextValue?.state.token).toBeNull();
    expect(contextValue?.state.user).toBeNull();
  });
});
