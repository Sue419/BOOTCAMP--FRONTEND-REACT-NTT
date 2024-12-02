import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import AppRoutesComponent from "./appRoutes";

function App() {

  return (
    <>
      <Router>
          <AppRoutesComponent/>
      </Router>
    </>
  )
}

export default App

