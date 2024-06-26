import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Skills from "./containers/Skills/Skills"
import About from "./containers/About/About"
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
          path="/about"
          element={<About />}/>
        <Route 
          path="/skills"
          element={<Skills />}/>
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