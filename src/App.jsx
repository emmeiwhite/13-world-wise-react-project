import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Pricing from './pages/Pricing'
import Products from './pages/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="pricing"
          element={<Pricing />}
        />

        <Route
          path="products"
          element={<Products />}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default App
