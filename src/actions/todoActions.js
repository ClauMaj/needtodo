//product: id, productName, price

export const addTodo = (todoItem) => {
  return {
    type: "ADD_TODO",
    data: todoItem,
  };
};

//product should be unique id
export const deleteTodo = (todoItem) => {
  return {
    type: "DELETE_TODO",
    data: todoItem,
  };
};

export const startUpdate = (todoItem) => {
  return {
    type: "START_UPDATE",
    data: todoItem,
  };
};

export const updateTodo = (todoItem) => {
  return {
    type: "UPDATE_TODO",
    data: todoItem,
  };
};
