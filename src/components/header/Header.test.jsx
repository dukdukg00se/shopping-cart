import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

/* eslint-disable no-undef*/

test('Renders correct headings', () => {
  render(
    <BrowserRouter>
      <Header itemsInCart={[]} />
    </BrowserRouter>,
  );

  expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('A.B.C');
  expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
    'A Beautiful Choice',
  );
});

test('Links', () => {
  render(
    <BrowserRouter>
      <Header itemsInCart={[]} />
    </BrowserRouter>,
  );

  const links = screen.getAllByRole('link');
  expect(links[0].textContent).toBe('A.B.CA Beautiful Choice');
  expect(links[0]).toHaveAttribute('href', '/');
  expect(links[1].textContent).toBe('Home');
  expect(links[1]).toHaveAttribute('href', '/');
  expect(links[2].textContent).toBe('Products');
  expect(links[2]).toHaveAttribute('href', '/products');
  expect(links[3].textContent).toBe('Cart (0)');
  expect(links[3]).toHaveAttribute('href', '/cart');
});

test('Cart displays item count', () => {
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
      <Header itemsInCart={mockCartWithItems} />
    </BrowserRouter>,
  );

  const link = screen.getByText(/Cart/);
  expect(link.textContent).toBe('Cart (3)');
});
