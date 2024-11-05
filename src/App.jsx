import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './pages/product'
import HomePage from './pages/HomePage'
import Pricing from './pages/Pricing'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          // path="/"
          index
          element={<HomePage />}
        />
        <Route
          path="product"
          element={<Product />}
        />
        <Route
          path="pricing"
          element={<Pricing />}
        />

        <Route
          path="app"
          element={<AppLayout />}
        >
          <Route
            index
            element={<p>REPLACE WITH LIST OF CITIES </p>}
          />
          {/* --- Nested Routes | We use <Outlet/> Component where ever we want to render the nested route !--- */}
          <Route
            path="cities"
            element={<p>List of Cities </p>}
          />

          <Route
            path="countries"
            element={<p>List of Countries</p>}
          />

          <Route
            path="form"
            element={<p>Form Component</p>}
          />
        </Route>

        <Route
          path="login"
          element={<Login />}
        />

        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}
