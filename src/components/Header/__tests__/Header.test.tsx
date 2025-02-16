import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders header title', () => {
  render(<Header title="Near-Earth Object Overview" />);
  expect(screen.getByText(/Near-Earth Object Overview/i)).toBeInTheDocument();
});