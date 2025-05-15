/* src/components/TodoForm.test.jsx */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoProvider } from '../context/TodoContext';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

describe('<TodoForm />', () => {
  beforeEach(() => {
    render(
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    );
  });

  it('renders input and add button', () => {
    expect(screen.getByPlaceholderText(/what needs doing\?/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  it('adds a new todo to the list when submitted', () => {
    fireEvent.change(screen.getByPlaceholderText(/what needs doing\?/i), {
      target: { value: 'New Task' }
    });
    fireEvent.click(screen.getByRole('button', { name: /add/i }));
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });
});



