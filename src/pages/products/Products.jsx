// import { useEffect, useState } from 'react';
import Catalog from '../../components/catalog/Catalog';
import styles from './Products.module.css';

export default function Products({ onClick, items }) {
  // const [products, setProducts] = useState();
  // const [error, setError] = useState();
  // const [isLoading, setIsLoading] = useState();

  // useEffect(() => {
  //   setIsLoading(true);
  //   // async function loadProducts() {
  //   //   try {
  //   //     const products = await getImage();
  //   //     setProducts(products);
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   }
  //   // }
  //   // loadProducts();

  //   /** Instead of a named fn and calling it as above, use an IIFE */
  //   (async () => {
  //     try {
  //       const products = await loadProducts();
  //       setProducts(getClothingItems(products));
  //     } catch (error) {
  //       setError('Something went wrong');
  //     }
  //     setIsLoading(false);
  //   })();
  // }, []);

  return (
    <main className={styles.productsContainer}>
      {/* <h1>Products</h1>
      {error && <p>ERRRROOORRR</p>} */}
      {/* {isLoading ? <p>Loading Products</p> : <p>Done Loading</p>} */}

      {items && <Catalog products={items} onClick={onClick} />}
    </main>
  );
}
