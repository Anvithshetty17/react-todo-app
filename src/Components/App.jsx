import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    if (task.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        task,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodo onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleComplete={toggleComplete} onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
