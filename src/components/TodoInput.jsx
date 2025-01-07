import { useState } from "react";
import PropTypes from "prop-types";

export default function TodoInput({ onAddTodo }) {
  const [todoInput, setTodoInput] = useState("");
  //
  function handleSubmit(e) {
    e.preventDefault();
    //
    if (!todoInput) return;
    //
    const newTodo = {
      id: crypto.randomUUID(),
      todo: todoInput,
      completed: false,
    };
    //
    onAddTodo(newTodo);
    //
    setTodoInput("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter New Todos"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button className="add-button">Add</button>
    </form>
  );
}

TodoInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
