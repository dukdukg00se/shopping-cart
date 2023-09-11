import { render, screen } from '@testing-library/react';
import App from '../App';

/* eslint-disable no-undef*/

describe('App component', () => {
  it('renders correct heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(
      'A Beautiful Choice',
    );
  });
});
