import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./TodoList.css";

function TodoList(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(response.data.slice(0,10));
    }
    fetchData();
  }, []);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    };

  const completeTodo = (id) => {
    setTodos(todos.map((todo) => {
    if (todo.id === id) {
    return {...todo, completed: !todo.completed,
    };
    }
  return todo;
    })
    );
    };

  return (
    <ul className='root'>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}: {todo.completed ? 'Completed' : 'Not completed'}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
          <button onClick={() => completeTodo(todo.id)}>
          {todo.completed ? '❌' : '✅'}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
