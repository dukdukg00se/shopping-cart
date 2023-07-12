import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function getItemCount(items) {
  let totalItems = 0;
  items.forEach((item) => {
    totalItems += item.quantity;
  });
  return totalItems;
}

export default function Navbar({ itemsInCart }) {
  // let totalItems = 0;
  // itemsInCart.forEach((item) => {
  //   totalItems += item.quantity;
  // });

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
            <Link to="/cart">Cart ({getItemCount(itemsInCart)})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
