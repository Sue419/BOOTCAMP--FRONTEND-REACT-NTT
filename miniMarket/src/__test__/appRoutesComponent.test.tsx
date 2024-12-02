import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "../constants/routes";
import HomePage from "../pages/home/home";
import Checkout from "../pages/checkout/checkout";

describe('App Routes', () => {

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

  it("renders the Checkout component at the correct route", () => {
    render(
      <MemoryRouter initialEntries={[AppRoutes.Checkout]}>
        <Routes>
          <Route path={AppRoutes.Checkout} element={<Checkout />} />
        </Routes>
      </MemoryRouter>
    );
    
    expect(screen.getByText("Header")).toBeInTheDocument();
  });

});
