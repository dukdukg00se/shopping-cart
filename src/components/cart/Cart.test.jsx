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

test('Has correct headers', () => {
  render(
    <BrowserRouter>
      <Cart
        itemsInCart={mockCart}
        increaseQuantity={mockIncrease}
        decreaseQuantity={mockDecrease}
      />
    </BrowserRouter>,
  );

  const headers = screen.getAllByRole('heading', { level: 3 });
  expect(headers.length).toBe(2);
  expect(headers[0].textContent).toMatch('Your Shopping Cart');
  expect(headers[1].textContent).toMatch('Total: $0.00');
});
