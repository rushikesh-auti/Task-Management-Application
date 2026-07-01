import AppName from "./Component/AppName.jsx";
import AddTodo from "./Component/AddTodo.jsx";
import TodoItems from "./Component/TodoItems.jsx";
import WelcomeMessage from "./Component/WelcomeMessage.jsx";
import TodoItemsContextProvider from "../Store/todo-items-store.jsx";
import "./App.css";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className="container text-center mt-4">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;