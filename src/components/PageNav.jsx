import { NavLink } from 'react-router-dom'
import styles from './PageNav.module.css'
import Logo from '../components/Logo'

const PageNav = () => {
  return (
    <div className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/products">Products</NavLink>
        </li>

        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </div>
  )
}
export default PageNav
