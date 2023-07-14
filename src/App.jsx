import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import Error from './pages/error/Error';
import './App.css';

// api - fetch products
async function loadProducts() {
  const response = await fetch('https://fakestoreapi.com/products');

  if (!response.ok) {
    throw new Error('Check product fetch');
  }

  return response.json();
}

// Filters input products and returns only clothing items
// Also add quantity prop to each item set to 0
function getClothingItems(items) {
  const catalog = items.filter(
    (item) =>
      item.category === "women's clothing" || item.category === "men's clothing"
  );

  catalog.forEach((item) => {
    item.quantity = 0;
  });

  return catalog;
}

// App component
function App() {
  const [error, setError] = useState(false);
  const [items, setItems] = useState();
  const [itemsInCart, setItemsInCart] = useState([]);

  // Fetch and setItems on component load
  useEffect(() => {
    // Instead of a named fn and calling it as below, use an IIFE
    // -------------------------------
    // async function loadProducts() {
    //   try {
    //     const products = await getImage();
    //     setProducts(products);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // loadProducts();

    (async () => {
      try {
        const products = await loadProducts();
        setItems(getClothingItems(products));
        setError(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  const addItemToCart = (e) => {
    const itemId = +e.target.closest('li').id;
    const inCart = itemsInCart
      .reduce((prevItemId, currItem) => {
        const tempArr = [...prevItemId];
        tempArr.push(currItem.id);
        return tempArr;
      }, [])
      .includes(itemId);

    if (!inCart) {
      let tempItem;
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === itemId) {
          tempItem = { ...items[i] };
          tempItem.quantity++;
          setItemsInCart([...itemsInCart, tempItem]);
        }
      }
    } else {
      let tempItemList = [...itemsInCart];
      for (let i = 0; i < tempItemList.length; i++) {
        if (tempItemList[i].id === itemId) {
          tempItemList[i].quantity++;
          setItemsInCart(tempItemList);
        }
      }
    }
  };

  // Increase items in cart
  const increaseQuantity = (e) => {
    const itemId = +e.target.closest('li').id;
    let tempItemList = [...itemsInCart];

    for (let i = 0; i < tempItemList.length; i++) {
      if (tempItemList[i].id === itemId) {
        tempItemList[i].quantity++;
        setItemsInCart(tempItemList);
      }
    }
  };

  // Decrease items in cart
  const decreaseQuantity = (e) => {
    const itemId = +e.target.closest('li').id;
    let tempItemList = [...itemsInCart];

    for (let i = 0; i < tempItemList.length; i++) {
      if (tempItemList[i].id === itemId) {
        if (tempItemList[i].quantity <= 1) {
          tempItemList.splice(i, 1);
        } else {
          tempItemList[i].quantity--;
        }
      }
    }

    setItemsInCart(tempItemList);
  };

  return (
    <>
      <Navbar itemsInCart={itemsInCart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            error ? (
              <Error />
            ) : (
              <Products onClick={addItemToCart} products={items} />
            )
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              itemsInCart={itemsInCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
