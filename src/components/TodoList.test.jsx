
/* src/components/TodoList.test.jsx */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoProvider } from '../context/TodoContext';
import TodoList from './TodoList';

describe('<TodoList />', () => {
  it('displays no tasks message when list is empty', () => {
    render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    );
    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument();
  });
});

