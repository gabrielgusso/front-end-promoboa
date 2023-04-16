import GlobalStyle from "./components/GlobalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductPage from "./pages/ProductsPage"
import Auth from "./pages/Auth"
import { useState } from "react"

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/entrar" element={<Auth />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
