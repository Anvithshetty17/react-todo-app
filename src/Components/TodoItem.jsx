import React from 'react';

function TodoItem({ todo, onToggleComplete, onDeleteTodo }) {
  return (
    <li
      onClick={() => onToggleComplete(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        backgroundColor: todo.completed ? '#d3ffd3' : 'white',
      }}
    >
      {todo.task}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering toggle
          onDeleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
