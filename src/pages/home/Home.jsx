import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className={styles.home}>
      <Link className={styles.overlayText} to="/products">
        <h2>Shop Our Summer Collection</h2>
      </Link>
    </main>
  );
}
