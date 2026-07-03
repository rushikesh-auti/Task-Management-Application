export const getItemsFromServer = async () => {
  const response = await fetch("http://localhost:5000/api/todo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result.data.map(mapServerItemToLocalItem);
};

export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:5000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });
  const result = await response.json();
  return mapServerItemToLocalItem(result.data);
};

const mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    name: serverItem.task,
    dueDate: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  };
};