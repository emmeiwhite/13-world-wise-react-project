import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Pricing from './pages/Pricing'
import Products from './pages/Products'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'

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

        <Route
          path="app"
          element={<AppLayout />}
        />

        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default App
