import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Todo App</h1>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;