import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  //
  function handleAddTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }
  //
  function handleDeleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }
  //
  function handleCheckTodo(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList
        todoArr={todos}
        onDeleteTodo={handleDeleteTodo}
        onCheckTodo={handleCheckTodo}
      />
    </div>
  );
}
