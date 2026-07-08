import { useEffect, useMemo, useState } from "react";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

import {
  addItemToServer,
  deleteItemFromServer,
  getItemsFromServer,
} from "./services/itemService";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const items = await getItemsFromServer();
      setTodoItems(items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewItem = async (task, date) => {
    try {
      const item = await addItemToServer(task, date);

      setTodoItems((prev) => [...prev, item]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItemFromServer(id);

      setTodoItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const totalTasks = todoItems.length;

  const completedTasks = useMemo(
    () => todoItems.filter((item) => item.completed).length,
    [todoItems]
  );

  const pendingTasks = totalTasks - completedTasks;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <AppName />

        <section className="mb-8 grid grid-cols-3 gap-3 sm:gap-4">
          <StatCard
            title="Total"
            value={totalTasks}
            // color="bg-blue-500"
          />

          <StatCard
            title="Done"
            value={completedTasks}
            // color="bg-emerald-500"
          />

          <StatCard
            title="Pending"
            value={pendingTasks}
            // color="bg-amber-500"
          />
        </section>

        <AddTodo onNewItem={handleNewItem} />

        <div className="mt-8">
          <WelcomeMessage todoItems={todoItems} />

          <TodoItems
            todoItems={todoItems}
            onDeleteClick={handleDeleteItem}
          />
        </div>
      </div>
    </main>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className={`absolute left-0 top-0 h-1 w-full ${color}`}></div>

      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
        {value}
      </h2>
    </div>
  );
}

export default App;