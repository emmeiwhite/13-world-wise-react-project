import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <h1>WorldWise Beautiful App</h1>
      <div>
        <Link to="/">Home</Link>
      </div>

      <div>
        <Link to="/pricing">Pricing</Link>
      </div>

      <div>
        <Link to="/product">Product</Link>
      </div>
    </div>
  )
}
