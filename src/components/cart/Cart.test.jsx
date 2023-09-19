import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';
import userEvent from '@testing-library/user-event';

/* eslint-disable no-undef*/

// Need to test useNavigate?
// Mock useNavigate and see if it's called?

test('Renders correct top headeqr', () => {
  render(
    <BrowserRouter>
      <Cart itemsInCart={[]} />
    </BrowserRouter>,
  );

  expect(screen.getByRole('heading', { level: 3 }).textContent).toBe(
    'Your Shopping Cart',
  );
});

test('Renders checkout button', () => {
  render(
    <BrowserRouter>
      <Cart itemsInCart={[]} />
    </BrowserRouter>,
  );

  expect(screen.getByRole('button', { name: 'Checkout' })).toBeInTheDocument();
});

test('Renders close button', () => {
  render(
    <BrowserRouter>
      <Cart itemsInCart={[]} />
    </BrowserRouter>,
  );

  expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
});

test('Cart renders $0.00 when empty', () => {
  render(
    <BrowserRouter>
      <Cart itemsInCart={[]} />
    </BrowserRouter>,
  );

  expect(screen.getByRole('heading', { level: 4 }).textContent).toBe(
    'Total: $0.00',
  );
});

test('Renders total cost of cart items', () => {
  const mockCartWithItems = [
    {
      id: 1,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      quantity: 2,
    },
    {
      id: 2,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      quantity: 1,
    },
  ];

  render(
    <BrowserRouter>
      <Cart itemsInCart={mockCartWithItems} />
    </BrowserRouter>,
  );

  expect(screen.getByRole('heading', { level: 4 }).textContent).toBe(
    'Total: $100.59',
  );
});

test('Has correct number of items in cart', () => {
  const mockCartWithItems = [
    {
      id: 1,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      quantity: 2,
    },
    {
      id: 2,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      quantity: 1,
    },
  ];

  render(
    <BrowserRouter>
      <Cart itemsInCart={mockCartWithItems} />
    </BrowserRouter>,
  );

  expect(screen.getAllByRole('listitem').length).toBe(2);
});

test('Cart items renders correct information', () => {
  const mockCartWithItems = [
    {
      id: 1,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      quantity: 2,
    },
  ];

  render(
    <BrowserRouter>
      <Cart itemsInCart={mockCartWithItems} />
    </BrowserRouter>,
  );

  const cartItem = screen.getByRole('listitem');

  expect(cartItem.querySelector('div > img').src).toBe(
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  );
  expect(cartItem.querySelector('h5').textContent).toBe(
    'Mens Casual Premium Slim Fit T-Shirts',
  );
  expect(cartItem.querySelector('h5 + span').textContent).toBe('22.30');
  expect(cartItem.querySelector('button + span').textContent).toBe('2');
});

test('Item quantity buttons calls correct fns', async () => {
  const mockCartWithItems = [
    {
      id: 1,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      quantity: 2,
    },
  ];
  const mockIncrease = vi.fn();
  const mockDecrease = vi.fn();
  const user = userEvent.setup();

  render(
    <BrowserRouter>
      <Cart
        itemsInCart={mockCartWithItems}
        increaseQuantity={mockIncrease}
        decreaseQuantity={mockDecrease}
      />
    </BrowserRouter>,
  );

  await user.click(screen.getByAltText('Plus icon'));
  expect(mockIncrease).toHaveBeenCalled();

  await user.click(screen.getByAltText('Minus icon'));
  expect(mockDecrease).toHaveBeenCalled();
});
