import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './pages/product'
import HomePage from './pages/HomePage'
import Pricing from './pages/Pricing'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './components/CityList'
import { useEffect, useState } from 'react'

const url = '../../data/cities.json'

export default function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function fetchCities() {
    try {
      setIsLoading(false)
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Error loading cities data')
      }
      const data = await response.json()
      // setCities(data.cities)
      setCities([])

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchCities()
  }, [])
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
            element={
              <CityList
                cities={cities}
                isLoading={isLoading}
              />
            }
          />
          {/* --- Nested Routes | We use <Outlet/> Component where ever we want to render the nested route !--- */}
          <Route
            path="cities"
            element={
              <CityList
                cities={cities}
                isLoading={isLoading}
              />
            }
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
