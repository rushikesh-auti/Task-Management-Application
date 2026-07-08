import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-5xl flex-col gap-4">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoName={item.name}
          todoDate={item.dueDate}
          completed={item.completed}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}

export default TodoItems;