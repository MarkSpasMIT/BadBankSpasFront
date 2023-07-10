import { render, screen } from '@testing-library/react';
import App from './App';

test('Page title exists', () => {
  render(<App />);
  const pageTitleElement = screen.getByText(/Welcome to the BadBank Spas - The best bad banking/i);
  expect(pageTitleElement).toBeInTheDocument();
});

test('Bank image exists', async () => {
  render(<App />);
  const bankImage = screen.getByAltText('Bank image');
  expect(bankImage.src).toContain('bank.jpg');
});
