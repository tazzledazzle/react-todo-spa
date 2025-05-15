// src/App.jsx
import React, { useEffect, useReducer } from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <div style={{ maxWidth: 400, margin: '2rem auto' }}>
        <h1>My To-Do List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;