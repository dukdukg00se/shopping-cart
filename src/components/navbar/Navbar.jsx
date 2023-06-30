import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header>
      <h1>The Shop</h1>
      <nav>
        <ul className="navList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
