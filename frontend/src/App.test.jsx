import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app not crash', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
