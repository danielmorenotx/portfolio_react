import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import GAReport from "./containers/GAReport/GAReport"
import Footer from "./components/Footer/Footer"

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route 
          path="/"
          element={<Main />}
        />
        <Route 
          path="/ga-report"
          element={<GAReport/>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;