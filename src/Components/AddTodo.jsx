import React, { useState } from 'react';

function AddTodo({ onAddTodo }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddClick = () => {
    onAddTodo(input);
    setInput('');
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddClick}>Add Task</button>
    </div>
  );
}

export default AddTodo;
