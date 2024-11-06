import { Outlet } from 'react-router-dom'
import AppNav from './AppNav'
import Logo from './Logo'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/* Outlet Component --- to show nested route */}
      <Outlet />

      {/* Here, I am confused about how to pass data down */}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  )
}
