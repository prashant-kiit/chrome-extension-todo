import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, Circle, Pencil, Trash2, X, Save } from 'lucide-react';
import { Todo } from '../types/todo';
import { useTodo } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <li
      className={`group flex items-center p-3 mb-2 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md ${
        todo.completed ? 'bg-opacity-80' : ''
      }`}
    >
      {isEditing ? (
        <div className="flex items-center w-full">
          <input
            ref={inputRef}
            type="text"
            className="flex-grow px-2 py-1 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSave}
            className="p-1 mr-1 text-green-500 rounded-full hover:bg-green-100 transition-colors"
            aria-label="Save"
          >
            <Save size={18} />
          </button>
          <button
            onClick={handleCancel}
            className="p-1 text-red-500 rounded-full hover:bg-red-100 transition-colors"
            aria-label="Cancel"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <>
          <button
            onClick={() => toggleTodo(todo.id)}
            className={`p-1 mr-2 rounded-full transition-colors ${
              todo.completed
                ? 'text-green-500 hover:bg-green-100'
                : 'text-gray-400 hover:bg-gray-100'
            }`}
            aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {todo.completed ? <CheckCircle size={20} /> : <Circle size={20} />}
          </button>
          <span
            className={`flex-grow transition-all duration-300 ${
              todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'
            }`}
          >
            {todo.text}
          </span>
          <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={handleEdit}
              className="p-1 mr-1 text-blue-500 rounded-full hover:bg-blue-100 transition-colors"
              aria-label="Edit"
            >
              <Pencil size={18} />
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-1 text-red-500 rounded-full hover:bg-red-100 transition-colors"
              aria-label="Delete"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;