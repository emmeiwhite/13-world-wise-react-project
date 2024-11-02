import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <h1>World Wise App</h1>

      <Link to="app">Go to the App</Link>
    </div>
  )
}
