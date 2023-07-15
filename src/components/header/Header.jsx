import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function getItemCount(items) {
  let totalItems = 0;
  items.forEach((item) => {
    totalItems += item.quantity;
  });
  return totalItems;
}

export default function Header({ itemsInCart }) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>A.B.C</h1>
        <h2>A Beautiful Choice</h2>
      </Link>

      <nav className={styles.navContainer}>
        <ul>
          <li className={styles.linkWrapper}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.linkWrapper}>
            <Link to="/products">Products</Link>
          </li>
          <li className={styles.linkWrapper}>
            <Link to="/cart">Cart ({getItemCount(itemsInCart)})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
