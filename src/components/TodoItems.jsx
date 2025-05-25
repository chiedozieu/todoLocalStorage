import React, { useState } from "react";
import { useTodo } from "../contexts";
import { CiSaveDown2 } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

function TodoItems({ todo }) {
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoText, setTodoText] = useState(todo?.todo);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoText });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div
      className={`flex items-center justify-between bg-gray-200 p-4 rounded-lg ${
        todo?.completed ? "bg-[#28ac0e]" : "bg-[#ccbed7]"
      }`}
    >
      <div className="w-8 h-8 bg-amber-50 rounded-full flex justify-center items-center">
          <input
            type="checkbox"
            className="cursor-pointer h-4 w-4"
            checked={todo?.completed}
            onChange={toggleCompleted}
          
          />
      </div>
      <input
        type="text"
        className={`border p-1 mx-2 outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-indigo-200" : "border-transparent"
        }`}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="inline-flex w-8 h-8 disabled:opacity-50 disabled:cursor-not-allowed justify-center items-center"
        onClick={() => {
          if (todo?.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo?.completed}
      >
        {isTodoEditable ? (
          <div className="w-8 h-8 bg-amber-50 rounded-full flex justify-center items-center">
              <CiSaveDown2 size={25} className="cursor-pointer text-[#28ac0e]" />
          </div>
        ) : (
          <div className="w-8 h-8 bg-amber-50 rounded-full flex justify-center items-center">
              <CiEdit className="cursor-pointer text-[#0338e8]" size={25} />
          </div>
        )}
      </button>
      <button
        className="ml-2 inline-flex w-8 h-8 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed justify-center items-center"
        onClick={() => deleteTodo(todo.id)}
      >
        <div className="w-8 h-8 bg-amber-50 rounded-full flex justify-center items-center">
            <RiDeleteBin5Line color="red" size={20} className="cursor-pointer" />
        </div>
      </button>
    </div>
  );
}

export default TodoItems;
