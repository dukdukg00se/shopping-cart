import styles from './Cart.module.css';

function getTotal(arr) {
  let total = 0;
  arr.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
}

export default function Cart({ itemsInCart }) {
  return (
    <div className={styles.cart}>
      <h3>Your Shopping Cart</h3>

      <div>
        {itemsInCart.map((item) => {
          return (
            <div key={item.id} id={item.id} className={styles.item}>
              <div>
                <img src={item.image}></img>
              </div>
              <div className={styles.itemInfo}>
                <h3>{item.title}</h3>
                <span>{item.price}</span>
                <div>
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3>Total: ${getTotal(itemsInCart)}</h3>

      <button type="button">Checkout</button>
      <button type="button">Close</button>
    </div>
  );
}
