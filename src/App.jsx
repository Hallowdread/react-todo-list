import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}
