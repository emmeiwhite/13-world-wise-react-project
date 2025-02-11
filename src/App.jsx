import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './components/CityList'
import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:8000'
const App = () => {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`${BASE_URL}/cities`)

        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
        setCities(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCities()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
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
            element={
              <CityList
                loading={loading}
                cities={cities}
                error={error}
              />
            }
          />
          <Route
            path="cities"
            element={
              <CityList
                loading={loading}
                cities={cities}
                error={error}
              />
            }
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
