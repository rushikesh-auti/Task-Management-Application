import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext();

const todoItemsReducer = (state, action) => {
  switch (action.type) {
    case "NEW_ITEM":
      return [
        ...state,
        {
          id: Date.now(),
          todoName: action.payload.itemName,
          todoDate: action.payload.itemDueDate,
        },
      ];

    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    dispatch({
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    });
  };

  const deleteItem = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: { id },
    });
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;