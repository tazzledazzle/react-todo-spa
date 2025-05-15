// src/components/TodoItem.jsx
import React from 'react';
import useTodos from '../hooks/useTodos';

export default function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <li style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
      <input 
        type="checkbox" 
        checked={todo.done} 
        onChange={() => toggleTodo(todo.id)} 
      />
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>✕</button>
    </li>
  );
}