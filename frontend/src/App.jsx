import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import TodoItemsContextProvider from "./store/todo-items-store.jsx";
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
