const API_URL = "http://localhost:5000/api/todo";

export const getItemsFromServer = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch todos.");
  }

  const result = await response.json();
  return result.data.map(mapServerItemToLocalItem);
};

export const addItemToServer = async (task, date) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task,
      date,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo.");
  }

  const result = await response.json();
  return mapServerItemToLocalItem(result.data);
};
//

export const markItemCompletedOnServer = async (id) => {
  const response = await fetch(`${API_URL}/${id}/completed`, {
    method: "PUT",
  });

  if (!response.ok) {
    throw new Error("Failed to update todo status.");
  }

  const result = await response.json();
  return mapServerItemToLocalItem(result.data);
};

export const deleteItemFromServer = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete todo.");
  }

  return id;
};

// Convert Backend Data to Frontend Data
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