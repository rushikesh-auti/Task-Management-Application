import {
  CalendarDaysIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function TodoItem({ id, todoName, todoDate, onDeleteClick }) {
  const formattedDate = new Date(todoDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-indigo-200 hover:shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="h-3 w-3 rounded-full bg-indigo-500"></div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {todoName}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <CalendarDaysIcon className="h-4 w-4" />

            <span>{formattedDate}</span>
          </div>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => onDeleteClick(id)}
        title="Delete Task"
        aria-label="Delete Task"
        className="rounded-xl p-2 text-slate-400 transition-all duration-200 hover:bg-red-50 hover:text-red-600"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default TodoItem;