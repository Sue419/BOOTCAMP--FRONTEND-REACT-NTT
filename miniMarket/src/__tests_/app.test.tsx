import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "@/constants/routes";
import HomePage from "@/pages/home/home";
import Checkout from "@/pages/checkout/checkout";

describe("App", () => {
  it("should render HomePage when navigating to /", () => {
    render(
      <MemoryRouter initialEntries={[AppRoutes.Home]}>
        <Routes>
          <Route path={AppRoutes.Home} element={<HomePage />} />
          <Route path={AppRoutes.Checkout} element={<Checkout />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render Checkout page when navigating to /checkout", () => {
    render(
      <MemoryRouter initialEntries={[AppRoutes.Checkout]}>
        <Routes>
          <Route path={AppRoutes.Home} element={<HomePage />} />
          <Route path={AppRoutes.Checkout} element={<Checkout />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("CheckoutMain")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
