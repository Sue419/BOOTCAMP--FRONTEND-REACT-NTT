import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import Checkout from "./pages/checkout/checkout";
import { AppRoutes } from "./constants/routes";
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path={AppRoutes.Home} element={<HomePage />} />
          <Route path={AppRoutes.Checkout} element={<Checkout />} />
        </Routes>
    </Router>
    </>
  )
}

export default App

