// falta test
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import Checkout from "./pages/checkout/checkout";
import { AppRoutes } from "./constants/routes";
import LoginPage from "./pages/login/login";

const AppRoutesComponent = () => (
  <Routes>
    <Route path={AppRoutes.Home} element={<HomePage />} />
    <Route path={AppRoutes.Checkout} element={<Checkout />} />
    <Route path={AppRoutes.Login} element= {<LoginPage />} />
  </Routes>
);

export default AppRoutesComponent;
