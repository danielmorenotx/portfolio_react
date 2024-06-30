import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Skills from "./containers/Skills/Skills"
import About from "./containers/About/About"
import GAReport from "./containers/GAReport/GAReport"
import Projects from "./containers/Projects/Projects"
import Contact from "./containers/Contact/Contact"
import Footer from "./components/Footer/Footer"

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route 
          path="/"
          element={<About />}/>
        <Route 
          path="/skills"
          element={<Skills />}/>
        <Route 
          path="/ga-report"
          element={<GAReport/>}
        />
        <Route 
          path="/projects"
          element={<Projects/>}
        />
        <Route 
          path="/contact"
          element={<Contact/>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;