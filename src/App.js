import React from 'react';
import { AppBar } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from './components/LoginForm';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
      </AppBar>
      <div className="container">
        <LoginForm />

        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
