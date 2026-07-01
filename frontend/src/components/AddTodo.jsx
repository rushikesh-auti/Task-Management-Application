import { useRef, useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const nameRef = useRef();
  const dateRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const date = dateRef.current.value;

    if (!name || !date) return;

    addNewItem(name, date);

    nameRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <form className="row g-2 mb-3" onSubmit={handleSubmit}>
      <div className="col-6">
        <input
          type="text"
          ref={nameRef}
          className="form-control"
          placeholder="Enter Todo"
        />
      </div>

      <div className="col-4">
        <input type="date" ref={dateRef} className="form-control" />
      </div>

      <div className="col-2">
        <button type="submit" className="btn btn-success w-100">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
