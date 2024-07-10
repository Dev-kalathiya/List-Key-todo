import { useState, useRef, useEffect } from 'react'
import "./App.css"

function TodoList() {
  const [todos, setTodos] = useState([])
  const todoInputRef = useRef()
  



  const addTodo = () => {
    const text = todoInputRef.current.value.trim()
    if (text) {
      setTodos([...todos, { id: todos.length+1, text, completed: false }])
      console.log(todos);
      todoInputRef.current.value = ''
    }
  }

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div id='#todo-list'>
      <h1>Todo List</h1>
      <input type="text" ref={todoInputRef} placeholder="Add a to-do..." />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)} />
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList 