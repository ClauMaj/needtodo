
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.data, ...state.todos],
      };

    case "DELETE_TODO":
      let filteredTodo = state.todos.filter((td) => {
        return td.id !== action.data.id;
      });
      return {
        ...state,
        todos: filteredTodo,
      };
    case "START_UPDATE":
      let setStartUpdate = state.todos.map((td) => {
        return td.id === action.data.id ? { ...td, isEdit: true } : td
      });
      return {
        ...state,
        todos: setStartUpdate,
      };
    case "UPDATE_TODO":
      let updatedTodo = state.todos.map((td) => {
        return td.id === action.data.id ? { ...td, todo: action.data.todo, isEdit: false } : td
      });
      return {
        ...state,
        todos: updatedTodo,
      };
    default:
      return state;
  }
};

export default todoReducer;
