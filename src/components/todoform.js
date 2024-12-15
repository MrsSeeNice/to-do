import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === '') return; // Prevent adding empty tasks
    addTodo(todoText.trim()); // Add the trimmed task
    setTodoText(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Enter a new task"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
