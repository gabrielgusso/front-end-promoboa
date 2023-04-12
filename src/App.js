import GlobalStyle from "./components/GlobalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductPage from "./pages/ProductsPage"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
