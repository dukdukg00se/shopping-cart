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

export default function Cart({ itemsInCart }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.cart}>
      <h3>Your Shopping Cart</h3>

      <div>
        {itemsInCart.map((item) => {
          return (
            <div key={item.id} id={item.id} className={styles.item}>
              <div>
                <img src={item.image} className={styles.itemImg}></img>
              </div>
              <div className={styles.itemInfo}>
                <h3>{item.title}</h3>
                <span>{item.price}</span>
                <div>
                  <button>
                    <img src={removeIcon} />
                  </button>
                  <span>{item.quantity}</span>
                  <button>
                    <img src={addIcon} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3>Total: ${getTotal(itemsInCart)}</h3>

      <button type="button">Checkout</button>
      <button type="button" onClick={goBack}>
        Close
      </button>
    </div>
  );
}
