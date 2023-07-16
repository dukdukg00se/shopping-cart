import styles from './Cart.module.css';
import addIcon from '../../assets/add-icon.svg';
import removeIcon from '../../assets/remove-icon.svg';
import { useNavigate } from 'react-router-dom';

function getTotal(arr) {
  let total = 0;
  arr.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total.toFixed(2);
}

export default function Cart({
  increaseQuantity,
  decreaseQuantity,
  itemsInCart,
}) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <main className={styles.cart}>
      <h3>Your Shopping Cart</h3>

      <ul>
        {itemsInCart.map((item) => {
          return (
            <li key={item.id} id={item.id} className={styles.item}>
              <div>
                <img src={item.image} className={styles.itemImg}></img>
              </div>
              <div className={styles.itemInfo}>
                <h3>{item.title}</h3>
                <span>{item.price.toFixed(2)}</span>
                <div className={styles.buttonContainer}>
                  <button type="button" onClick={decreaseQuantity}>
                    <img src={removeIcon} alt="Minus icon" />
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={increaseQuantity}>
                    <img src={addIcon} alt="Plus icon" />
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <h3>Total: ${getTotal(itemsInCart)}</h3>

      <button type="button">Checkout</button>
      <button type="button" onClick={goBack}>
        Close
      </button>
    </main>
  );
}
