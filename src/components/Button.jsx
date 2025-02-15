import styles from './Button.module.css'

const Button = ({ children, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles[type]} ${styles.btn}`}>
      {children}
    </button>
  )
}
export default Button
