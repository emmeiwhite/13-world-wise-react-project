import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'

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
          element={<Product />}
        />

        <Route
          path="login"
          element={<Login />}
        />

        <Route
          path="app"
          element={<AppLayout />}>
          {/* Adding the index route for /app when no child route matches */}
          <Route
            index
            element={<h2>LIST</h2>}
          />
          <Route
            path="cities"
            element={<h2>List of Cities</h2>}
          />

          <Route
            path="countries"
            element={<h2>Countries</h2>}
          />

          <Route
            path="form"
            element={<h2>Form</h2>}
          />
        </Route>

        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default App
