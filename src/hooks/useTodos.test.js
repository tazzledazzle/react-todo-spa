/* src/hooks/useTodos.test.js */
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { TodoProvider } from '../context/TodoContext';
import useTodos from '../hooks/useTodos';

const wrapper = ({ children }) => <TodoProvider>{children}</TodoProvider>;

describe('useTodos hook', () => {
  it('should start with empty todos', () => {
    const { result } = renderHook(() => useTodos(), { wrapper });
    expect(result.current.todos).toHaveLength(0);
  });

  it('should add, toggle, and remove todos', () => {
    const { result } = renderHook(() => useTodos(), { wrapper });
    act(() => {
      result.current.addTodo('Test todo');
    });
    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('Test todo');
    const id = result.current.todos[0].id;
    act(() => {
      result.current.toggleTodo(id);
    });
    expect(result.current.todos[0].done).toBe(true);
    act(() => {
      result.current.removeTodo(id);
    });
    expect(result.current.todos).toHaveLength(0);
  });
});