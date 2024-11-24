import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import Checkout from "./pages/checkout/checkout";
import './App.css'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </Router>
    </>
  )
}

export default App

