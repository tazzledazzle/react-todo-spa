// src/hooks/useTodos.js
import { useContext, useEffect } from 'react';
import TodoContext from '../context/TodoContext';

export default function useTodos() {
  const { todos, dispatch } = useContext(TodoContext);

  // Example: persist to localStorage
  useEffect(() => {
    localStorage.setItem('my-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => dispatch({ type: 'ADD', text });
  const toggleTodo = id => dispatch({ type: 'TOGGLE', id });
  const removeTodo = id => dispatch({ type: 'REMOVE', id });

  return { todos, addTodo, toggleTodo, removeTodo };
}