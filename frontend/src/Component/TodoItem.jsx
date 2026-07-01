import { useContext } from "react";
import { TodoItemsContext } from "../../Store/todo-items-store.jsx";

function TodoItem({ id, todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row align-items-center mb-2">
        <div className="col-6 text-start">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger w-100"
            onClick={() => deleteItem(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;