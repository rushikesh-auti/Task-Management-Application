import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

function WelcomeMessage({ todoItems }) {
  if (todoItems.length > 0) return null;

  return (
    <section className="mx-auto mt-12 flex max-w-3xl flex-col items-center rounded-2xl border border-slate-200 bg-white px-8 py-16 text-center shadow-sm">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50">
        <ClipboardDocumentListIcon className="h-10 w-10 text-indigo-600" />
      </div>

      <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
        No tasks yet
      </h2>

      <p className="mt-4 max-w-lg text-base leading-7 text-slate-500">
        Your workspace is currently empty. Create your first task to organize
        your work, track deadlines, and stay productive throughout the day.
      </p>

      <div className="mt-8 rounded-xl border border-indigo-100 bg-indigo-50 px-5 py-3">
        <p className="text-sm font-medium text-indigo-700">
          Start by adding your first task above.
        </p>
      </div>
    </section>
  );
}

export default WelcomeMessage;