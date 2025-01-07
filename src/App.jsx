import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const initialTodos = [
  {
    id: 32232,
    todo: "Wash my hair",
    completed: false,
  },
  {
    id: 27688,
    todo: "Brush my teeth",
    completed: false,
  },
  {
    id: 78777,
    todo: "Eat my breakfast",
    completed: true,
  },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
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
