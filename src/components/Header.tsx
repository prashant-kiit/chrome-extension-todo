import React from 'react';
import { CheckSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="mb-6">
      <div className="flex items-center justify-center mb-2">
        <CheckSquare className="text-blue-500 mr-2" size={32} />
        <h1 className="text-3xl font-bold text-gray-800">TaskMaster</h1>
      </div>
      <p className="text-center text-gray-500">Organize your tasks with style</p>
    </header>
  );
};

export default Header;