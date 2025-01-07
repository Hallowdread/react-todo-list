export default function TodoInput() {
  return (
    <form className="todo-form">
      <input type="text" className="todo-input" placeholder="Enter New Todos" />
      <button className="add-button">Add</button>
    </form>
  );
}
