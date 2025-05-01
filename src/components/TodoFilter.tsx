import React from 'react';
import { useTodo } from '../context/TodoContext';
import { TodoFilter as FilterType } from '../types/todo';

const TodoFilter: React.FC = () => {
  const { filter, setFilter, remainingCount } = useTodo();

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between mt-4 mb-2 text-sm">
      <div className="text-gray-500 mb-2 sm:mb-0">
        {remainingCount} {remainingCount === 1 ? 'task' : 'tasks'} remaining
      </div>
      <div className="flex space-x-1">
        {filterButtons.map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value)}
            className={`px-3 py-1 rounded-md transition-colors duration-200 ${
              filter === btn.value
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoFilter;