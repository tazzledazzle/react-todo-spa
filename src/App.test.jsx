// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

/* src/App.test.jsx */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('full integration: add, toggle, and remove todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/what needs doing\?/i);
  const addButton = screen.getByRole('button', { name: /add/i });
  
  fireEvent.change(input, { target: { value: 'Task 123' } });
  fireEvent.click(addButton);
  const todoItem = screen.getByText('Task 123');
  expect(todoItem).toBeInTheDocument();
  
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  
  const removeButton = screen.getByText('✕');
  fireEvent.click(removeButton);
  expect(screen.queryByText('Task 123')).not.toBeInTheDocument();
});
