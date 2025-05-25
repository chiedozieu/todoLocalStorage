import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState([]);

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Write your todo"
        className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-indigo-500"
        id=""
      />
      <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-r-md hover:bg-indigo-600">Add</button>
    </form>
  );
}

export default TodoForm;
