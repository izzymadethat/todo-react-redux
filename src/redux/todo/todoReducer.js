import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./todoTypes";

const initialTodos = {
  todos: [],
  completed: [],
};

const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case EDIT_TASK:
      const task =
        state.todos.find((t) => t.id === action.payload) ||
        state.completed.find((t) => t.id === action.payload);
      if (!task) return state;

      const isCompleted = !task.isCompleted;
      const updatedTask = { ...task, isCompleted };

      return {
        ...state,
        todos: isCompleted
          ? state.todos.filter((t) => t.id !== task.id)
          : [...state.todos, updatedTask],
        completed: isCompleted
          ? [...state.completed, updatedTask]
          : state.completed.filter((t) => t.id !== task.id),
      };

    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
        completed: state.completed.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
