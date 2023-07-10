import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div>
        <h1>A.B.C</h1>
        <h2>A Beautiful Choice</h2>
      </div>

      <nav className={styles.navContainer}>
        <ul>
          <li className={styles.linkWrapper}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.linkWrapper}>
            <Link to="/products">Products</Link>
          </li>
          <li className={styles.linkWrapper}>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
