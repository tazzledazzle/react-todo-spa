
/* src/components/TodoItem.test.jsx */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoProvider } from '../context/TodoContext';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import useTodos from '../hooks/useTodos';

const Setup = () => {
  const { addTodo } = useTodos();
  React.useEffect(() => {
    addTodo('Item 1');
  }, [addTodo]);
  return <TodoList />;
};

describe('<TodoItem />', () => {
  beforeEach(() => {
    render(
      <TodoProvider>
        <Setup />
      </TodoProvider>
    );
  });

  it('toggles todo when checkbox clicked', () => {
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    const item = screen.getByText('Item 1');
    expect(item).toHaveStyle('text-decoration: line-through');
  });

  it('removes todo when remove button clicked', () => {
    fireEvent.click(screen.getByText('✕'));
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });
});