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

export default function TodoList() {
  return (
    <>
      <div className="sort-clear">
        <select name="sort-select" id="">
          <option value="input">Sort By Input Order</option>
          <option value="alphabetically">Sort Alphabetically</option>
          <option value="completed">Sort By Completed</option>
        </select>
        <button className="clear-button">Clear All</button>
      </div>

      <ul className="todo-list">
        {initialTodos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

const Todo = ({ todo }) => {
  return (
    <li className="todo-item">
      <input type="checkbox" />
      <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.todo}
      </span>
      <button className="delete-button">Delete</button>
    </li>
  );
};
