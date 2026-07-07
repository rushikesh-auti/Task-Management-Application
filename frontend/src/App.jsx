import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import "./App.css";
import { useEffect, useState } from "react";
import { addItemToServer, getItemsFromServer, deleteItemFromServer } from "./services/itemService.js";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemsFromServer().then(initialItems => {
      setTodoItems(initialItems);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added:${itemName} Date:${itemDueDate}`);

    const item = await addItemToServer(itemName, itemDueDate);

    const newTodoItems = [...todoItems, item];
    setTodoItems(newTodoItems);
  };
  
  const handleDeleteItem = async (id) => {
    await deleteItemFromServer(id);
    const newTodoItems = todoItems.filter((item) => item.id !== id);
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
