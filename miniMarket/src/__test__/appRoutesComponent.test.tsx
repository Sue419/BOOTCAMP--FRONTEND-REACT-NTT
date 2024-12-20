import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "../constants/routes";
import HomePage from "../pages/home/home";
import Checkout from "../pages/checkout/checkout";
import { AuthProvider } from "../context/auth/authContext";

describe("App Routes", () => {
  it("renders the HomePage component at the correct route", async () => {
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={[AppRoutes.Home]}>
          <Routes>
            <Route path={AppRoutes.Home} element={<HomePage />} />
          </Routes>
        </MemoryRouter>
      </AuthProvider>
    );

    await waitFor(() => screen.getByRole("navigation"));
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders the Checkout component at the correct route", async () => {
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={[AppRoutes.Checkout]}>
          <Routes>
            <Route path={AppRoutes.Checkout} element={<Checkout />} />
          </Routes>
        </MemoryRouter>
      </AuthProvider>
    );

    await waitFor(() => screen.getByRole("navigation"));
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
