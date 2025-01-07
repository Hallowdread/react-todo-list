import { useState } from "react";

export default function TodoList({ todoArr, onDeleteTodo, onCheckTodo }) {
  const [sortBy, setSortBy] = useState("input");
  //
  let sortedTodos;
  
  if (sortBy === "input") {
    sortedTodos = 
  }

  return (
    <>
      <div className="sort-clear">
        <select
          name="sort-select"
          value={sortBy}
          onClick={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort By Input Order</option>
          <option value="alphabetically">Sort Alphabetically</option>
          <option value="completed">Sort By Completed</option>
        </select>
        <button className="clear-button">Clear All</button>
      </div>

      <ul className="todo-list">
        {todoArr.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            onDeleteTodo={onDeleteTodo}
            onCheckTodo={onCheckTodo}
          />
        ))}
      </ul>
    </>
  );
}

const Todo = ({ todo, onDeleteTodo, onCheckTodo }) => {
  return (
    <li className="todo-item">
      <input type="checkbox" onClick={() => onCheckTodo(todo.id)} />
      <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.todo}
      </span>
      <button className="delete-button" onClick={() => onDeleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};
