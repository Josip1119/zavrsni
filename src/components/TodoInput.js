import React, { useState } from 'react';
import "./TodoInput.css";

function TodoInput() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // add the new todo to the list
    setTodos([...todos, { title: newTodo, completed: false }]);
    setNewTodo('');
  }

  function removeTodo(index) {
    // remove the todo at the given index from the list
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  function toggleCompleted(index) {
    // toggle the completed property of the todo at the given index
    setTodos(
        todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        )
    );
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul className='textField'>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.title}: {todo.completed ? 'Completed' : 'Not completed'}
            <button onClick={() => toggleCompleted(index)}>
            {todo.completed ? '❌' : '✅'}
            </button>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoInput;
