import styles from './Sidebar.module.css'
import AppNav from './AppNav'
import Logo from './Logo'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>list of cities goes here as being added by the user</p>

      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()}</p> by WorldWise
        Inc.
      </footer>
    </aside>
  )
}
export default Sidebar
