import { useEffect, useState } from 'react';
import ProductCard from '../../components/productcard/ProductCard';
import './Products.css';

async function loadProducts() {
  const response = await fetch('https://fakestoreapi.com/products?limit=2');

  if (!response.ok) {
    throw new Error('Check product fetch');
  }

  return response.json();
}

export default function Products() {
  const [products, setProducts] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    // async function loadProducts() {
    //   try {
    //     const products = await getImage();
    //     setProducts(products);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // loadProducts();

    /** Instead of a named fn and calling it as above, use an IIFE */
    (async () => {
      try {
        const products = await loadProducts();
        setProducts(products);
      } catch (error) {
        console.error(error);
        setError(error);
      }
      setIsLoading;
    })();
  }, []);

  return (
    <main>
      <h1>Products</h1>
      {/* <ul>
        {products.map((product) => {
          return (
            <li key={product.id} id={product.id} className="productCard">
              <div>
                <img src={product.image}></img>
                <div className="productDescription">
                  <div className="title">{product.title}</div>
                  <div className="description">{product.description}</div>
                  <div className="price">${product.price}</div>
                </div>
                <button type="button">Add To Cart</button>
              </div>
            </li>
          );
        })}
      </ul> */}

      <ul className="productList">
        {products.map((prod) => ProductCard(prod))}
      </ul>
    </main>
  );
}
