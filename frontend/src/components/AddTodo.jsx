import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonClicked = () => {
    if (!todoName.trim() || !dueDate) return;

    onNewItem(todoName, dueDate);

    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Add New Task
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Task Input */}
        <input
          type="text"
          placeholder="Enter your task..."
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />

        {/* Date Input */}
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />

        {/* Button */}
        <button
          onClick={handleAddButtonClicked}
          className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg active:scale-95"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTodo;