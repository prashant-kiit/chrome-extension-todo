import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

const TodoInput: React.FC = () => {
  const { addTodo } = useTodo();
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
};

export default TodoInput;