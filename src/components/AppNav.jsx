import { nav } from './AppNav.module.css'

// Avoid name clashes with CSS Modules
export default function AppNav() {
  return (
    <nav className={nav}>
      <p>The AppNav Component</p>
    </nav>
  )
}
