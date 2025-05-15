// src/context/TodoContext.jsx
import React, { createContext, useReducer } from 'react';

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
    // in TodoProvider before useReducer
    const init = () => JSON.parse(localStorage.getItem('my-todos')) || [];
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    //   const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
        {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;