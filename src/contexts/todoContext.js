import { createContext, useContext } from "react";


export const todoContext = createContext({
    todos: [
        {
            id: 1,
            title: 'Todo 1',
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider