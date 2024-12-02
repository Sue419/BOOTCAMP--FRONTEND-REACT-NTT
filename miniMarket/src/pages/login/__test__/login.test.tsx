import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "@/constants/routes";
import LoginPage from "../login";

describe("Login", () => {
  it("renders the LoginPage component at the correct route", () => {
    render(
      <MemoryRouter initialEntries={[AppRoutes.Login]}>
        <Routes>
          <Route path={AppRoutes.Login} element={<LoginPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
  });
});
