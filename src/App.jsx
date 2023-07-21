import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getClothingItems } from './utils/utilityFns';
import loadProducts from './api/productsApi';
import Navbar from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import Error from './pages/error/Error';
import './App.css';

// App component
/** */
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
      <BrowserRouter>
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
        <Footer />
      </BrowserRouter>
    </>
  );
}

/** */
// const App = () => <h1>Our First Test</h1>;

export default App;
