export default function TodoList() {
  return (
    <>
      <div className="sort-clear">
        <select name="sort-select" id="">
          <option value="input">Sort By Input Order</option>
          <option value="alphabetically">Sort Alphabetically</option>
          <option value="completed">Sort By Completed</option>
        </select>
        <button className="clear-button"></button>
      </div>
    </>
  );
}
