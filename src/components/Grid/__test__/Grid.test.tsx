import React from 'react';
import { render, screen } from '@testing-library/react';
import NeoGrid from '../Grid';

test('renders clear button from header', () => {
  render(<NeoGrid />);
  expect(screen.getByText(/Clear Filters and Sorters/i)).toBeInTheDocument();
});