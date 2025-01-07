import { useState } from "react";
import PropTypes from "prop-types";

export default function TodoList({ todoArr, onDeleteTodo, onCheckTodo }) {
  const [sortBy, setSortBy] = useState("input");
  //
  let sortedTodos;

  if (sortBy === "input") {
    sortedTodos = todoArr;
  }

  if (sortBy === "alphabetically") {
    sortedTodos = todoArr.slice().sort((a, b) => a.todo.localeCompare(b.todo));
  }

  if (sortBy === "completed") {
    sortedTodos = todoArr
      .slice()
      .sort((a, b) => (a.completed ? 1 : 0) - (b.completed ? 1 : 0));
  }

  return (
    <>
      <div className="sort-clear">
        <select
          name="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort By Input Order</option>
          <option value="alphabetically">Sort Alphabetically</option>
          <option value="completed">Sort By Completed</option>
        </select>
        <button className="clear-button">Clear All</button>
      </div>

      <ul className="todo-list">
        {sortedTodos.map((todo) => (
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

TodoList.propTypes = {
  todoArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      todo: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onCheckTodo: PropTypes.func.isRequired,
};

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

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onCheckTodo: PropTypes.func.isRequired,
};
