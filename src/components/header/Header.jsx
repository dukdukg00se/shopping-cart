import { Link } from 'react-router-dom';
import { getItemCount } from '../../utils/utilityFns';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

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

Header.propTypes = {
  itemsInCart: PropTypes.array,
};
