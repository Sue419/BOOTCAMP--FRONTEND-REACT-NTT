import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import Checkout from "./pages/checkout/checkout";
import { AppRoutes } from "./constants/routes";
import LoginPage from "./pages/login/login";
import { AuthProvider } from "./context/auth/authContext";
import { withAuth } from "./HOC/withAuth";

const ProtectedHomePage = withAuth(HomePage);
const ProtectedCheckout = withAuth(Checkout);

const AppRoutesComponent = () => (
  <AuthProvider>
    <Routes>
      <Route path={AppRoutes.Home} element={<ProtectedHomePage />} />
      <Route path={AppRoutes.Checkout} element={<ProtectedCheckout />} />
      <Route path={AppRoutes.Login} element={<LoginPage />} />
    </Routes>
  </AuthProvider>
);

export default AppRoutesComponent;
