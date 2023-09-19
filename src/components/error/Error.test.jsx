import { render, screen } from '@testing-library/react';
import Error from './Error';

/* eslint-disable no-undef*/

test('Renders correct heading', () => {
  render(<Error />);

  expect(screen.getByRole('heading').textContent).toBe(
    'Sorry, an error occured. Please try again later.',
  );
});
