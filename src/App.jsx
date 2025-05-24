import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodos ] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev ])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((t) => t.id === todo.id ? todo : t))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((t) => t.id === id ? {...t, completed: !t.completed} : t))
  }
  

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
      <h1 className='text-red-800'>Hello</h1>
    </TodoProvider>
  )
}

export default App
