import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import "./App.css";
import { useState } from "react";
import { addItemToServer } from "./services/itemService.js";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added:${itemName} Date:${itemDueDate}`);

    // const item = await addItemToServer(itemName, itemDueDate);
   
    const newTodoItems = [
      ...todoItems,
      item,
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemsName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.name !== todoItemsName,
    );
    setTodoItems(newTodoItems);
  };

  return (
      <div className="container text-center mt-4">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMessage />
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
  );
}

export default App;
