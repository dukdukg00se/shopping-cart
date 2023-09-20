import { render, screen } from '@testing-library/react';
import Products from './Products';
import userEvent from '@testing-library/user-event';

/* eslint-disable no-undef*/

test('Renders list of products', () => {
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

  render(<Products products={mockCartWithItems} />);

  expect(screen.getAllByRole('listitem').length).toBe(2);
});

test('List items have necessary content', () => {
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

  render(<Products products={mockCartWithItems} />);

  const items = screen.getAllByRole('listitem');
  expect(items[0].querySelector('img')).toHaveAttribute('src', items[0].image);
  expect(items[0].querySelector('h4').textContent).toBe(
    'Mens Casual Premium Slim Fit T-Shirts',
  );
  expect(items[0].querySelector('h4 + div').textContent).toBe('$22.3');
  expect(items[0].querySelector('button').textContent).toBe('Add To Cart');
});

test('Add item button click', async () => {
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
  const mockFn = vi.fn();
  const user = userEvent.setup();

  render(<Products products={mockCartWithItems} onClick={mockFn} />);
  const addBtn = screen.getByRole('button', { name: 'Add To Cart' });

  await user.click(addBtn);
  expect(mockFn).toHaveBeenCalledTimes(1);
});
