import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';

/* eslint-disable no-undef*/

// has h3  with "Your Shopping Cart"
// has ul
// has h3 with "Total:${}"
// has button with "Checkout"
// has button with "Close"
// has button that calls goBack() onClick

const mockIncrease = vi.fn();
const mockDecrease = vi.fn();
const mockCart = [];

test('Displays correct component header', () => {
  render(
    <BrowserRouter>
      <Cart
        itemsInCart={mockCart}
        increaseQuantity={mockIncrease}
        decreaseQuantity={mockDecrease}
      />
    </BrowserRouter>,
  );

  expect(screen.getByRole('heading', { level: 3 }).textContent).toBe(
    'Your Shopping Cart',
  );
});

test('Displays correct price header', () => {
  render(
    <BrowserRouter>
      <Cart
        itemsInCart={mockCart}
        increaseQuantity={mockIncrease}
        decreaseQuantity={mockDecrease}
      />
    </BrowserRouter>,
  );

  expect(screen.getByRole('heading', { level: 4 }).textContent).toBe(
    'Total: $0.00',
  );
});

test('Price header correctly displays price of items in cart', () => {
  const mockCartWithItems = [
    {
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      quantity: 2,
    },
    {
      title: 'Mens Cotton Jacket',
      price: 55.99,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      quantity: 1,
    },
  ];

  render(
    <BrowserRouter>
      <Cart
        itemsInCart={mockCartWithItems}
        increaseQuantity={mockIncrease}
        decreaseQuantity={mockDecrease}
      />
    </BrowserRouter>,
  );

  expect(screen.getByRole('heading', { level: 4 }).textContent).toBe(
    'Total: $100.59',
  );
});

test('Cart items', () => {
  const mockCartWithItems = [
    {
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      quantity: 2,
    },
    {
      title: 'Mens Cotton Jacket',
      price: 55.99,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      quantity: 1,
    },
  ];

  render(
    <BrowserRouter>
      <Cart
        itemsInCart={mockCartWithItems}
        increaseQuantity={mockIncrease}
        decreaseQuantity={mockDecrease}
      />
    </BrowserRouter>,
  );
});
