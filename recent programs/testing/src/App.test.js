import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'
import {sum} from './components/Sum'

test('test 1', () => {
  render(<App />);
  const linkElement = screen.getByText("mswd class");
  expect(linkElement).toBeInTheDocument();
});
test('test 2', async () => {
  render(<App />);
  const user=userEvent.setup()
  const button = screen.getByText("change text");
  await user.click(button)
  const linkElement = screen.getByText("new text");
  expect(linkElement).toBeInTheDocument();
});
test('test 3', () => {
  expect(sum(1,2)).toBe(3);
});
