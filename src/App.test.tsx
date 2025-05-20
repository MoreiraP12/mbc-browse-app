import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MedBrowseComp header', () => {
  render(<App />);
  const headings = screen.getAllByText(/MedBrowseComp/i);
  expect(headings.length).toBeGreaterThan(0);
});
