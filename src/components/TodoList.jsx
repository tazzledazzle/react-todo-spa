// src/components/TodoList.jsx
import React from 'react';
import useTodos from '../hooks/useTodos';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) return <p>No tasks yet!</p>;

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}