import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

/* eslint-disable no-undef*/

test('Renders correct heading', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );

  expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
    'Shop Our Summer Collection',
  );
});

test('Link', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );

  expect(screen.getByRole('link')).toHaveAttribute('href', '/products');
});
