import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItems } from "./components/index";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
   
      <div className="bg-gray-100 max-h-screen">
       <h1 className="text-3xl font-bold text-center p-4 text-gray-800"> Todo List</h1> 
        <div className="flex flex-col h-screen p-8 max-w-2xl mx-auto ">
          <div className="w-full">
            <TodoForm />
          </div>
          {todos.map((todo) => (
            <div className="w-full" key={todo.id}>
              <TodoItems todo={todo}/>
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
