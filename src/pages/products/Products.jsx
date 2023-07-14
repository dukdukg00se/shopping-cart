import styles from './Products.module.css';

export default function Products({ onClick, products }) {
  return (
    <main className={styles.productsContainer}>
      {products && (
        <ul className={styles.catalog}>
          {products.map((product) => {
            return (
              <li key={product.id} id={product.id}>
                <div className={styles.productCard}>
                  <img src={product.image}></img>
                  <div className={styles.productDescription}>
                    <h4 className={styles.productTitle}>{product.title}</h4>
                    <div className={styles.productPrice}>${product.price}</div>
                  </div>
                  <button type="button" onClick={onClick}>
                    Add To Cart
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
