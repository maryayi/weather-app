import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/find weather of any city/i);
  expect(linkElement).toBeInTheDocument();
});


test('send valid request', async () => {
  render(<App />);
  const inputElement: any = screen.getByLabelText('city-input');
  fireEvent.change(inputElement, { target: { value: 'tehran' } });
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.value).toBe('tehran');
});