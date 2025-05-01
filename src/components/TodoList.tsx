import React from 'react';
import { useTodo } from '../context/TodoContext';

const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo } = useTodo();

  if (todos.length === 0) {
    return <p className="text-gray-500 text-center">No todos yet</p>;
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-white p-3 rounded shadow-sm"
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-3"
            />
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;