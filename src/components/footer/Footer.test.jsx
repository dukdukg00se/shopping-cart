import { render, screen } from '@testing-library/react';
import Footer from './Footer';

/* eslint-disable no-undef*/

test('Renders correct contact info', () => {
  render(<Footer />);

  expect(screen.getByText('ABC Inc.')).toBeInTheDocument();
  expect(screen.getByText('(999) 999-1111')).toBeInTheDocument();
  expect(screen.getByText('123 Mulholland Dr.')).toBeInTheDocument();
  expect(screen.getByText('Pangeae, ZZ 54321-1234')).toBeInTheDocument();
});

test('Renders social media links', () => {
  render(<Footer />);

  expect(screen.getByAltText('Facebook logo').parentNode).toHaveAttribute(
    'href',
    'https://www.facebook.com/',
  );
  expect(screen.getByAltText('Instagram logo').parentNode).toHaveAttribute(
    'href',
    'https://www.instagram.com/',
  );
  expect(screen.getByAltText('Twitter logo').parentNode).toHaveAttribute(
    'href',
    'https://www.twitter.com/',
  );
  expect(screen.getByAltText('Linkedin logo').parentNode).toHaveAttribute(
    'href',
    'https://www.linkedin.com/',
  );
});
