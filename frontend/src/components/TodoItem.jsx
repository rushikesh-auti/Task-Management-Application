import { useState } from "react";
import {
  CalendarDaysIcon,
  PencilSquareIcon,
  TrashIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function TodoItem({
  id,
  todoName,
  todoDate,
  completed,
  onDeleteClick,
  onCompleteClick,
  // onUpdateClick,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todoName);
  const [date, setDate] = useState(todoDate);

  const handleSave = async () => {
    if (!task.trim() || !date) return;

    await onUpdateClick(id, task, date);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTask(todoName);
    setDate(todoDate);
    setIsEditing(false);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-indigo-200 hover:shadow-md">

      {isEditing ? (
        <div className="space-y-4">

          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500"
          />

          <input
            type="date"
            value={date?.split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500"
          />

          <div className="flex justify-end gap-3">

            <button
              onClick={handleCancel}
              className="flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-100"
            >
              <XMarkIcon className="h-5 w-5" />
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              <CheckIcon className="h-5 w-5" />
              Save
            </button>

          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-4">

            <input
              type="checkbox"
              checked={completed}
              onChange={() => onCompleteClick(id)}
              className="h-5 w-5 accent-indigo-600"
            />

            <div>

              <h3
                className={`text-lg font-semibold ${
                  completed
                    ? "text-slate-400 line-through"
                    : "text-slate-900"
                }`}
              >
                {todoName}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">

                <CalendarDaysIcon className="h-4 w-4" />

                <span>
                  {new Date(todoDate).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>

              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">

            <button
              onClick={() => setIsEditing(true)}
              className="rounded-lg p-2 text-indigo-600 transition hover:bg-indigo-50"
              title="Edit Task"
            >
              <PencilSquareIcon className="h-5 w-5" />
            </button>

            <button
              onClick={() => onDeleteClick(id)}
              className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
              title="Delete Task"
            >
              <TrashIcon className="h-5 w-5" />
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;