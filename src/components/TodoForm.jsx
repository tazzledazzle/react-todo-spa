// src/components/TodoForm.jsx
import React, { useState } from 'react';
import useTodos from '../hooks/useTodos';

export default function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  const onSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What needs doing?"
      />
      <button type="submit">Add</button>
    </form>
  );
}