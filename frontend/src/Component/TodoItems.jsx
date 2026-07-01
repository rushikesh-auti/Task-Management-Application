import { useContext } from "react";
import { TodoItemsContext } from "../../Store/todo-items-store.jsx";
import TodoItem from "./TodoItem.jsx";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoName={item.todoName}
          todoDate={item.todoDate}
        />
      ))}
    </>
  );
};

export default TodoItems;