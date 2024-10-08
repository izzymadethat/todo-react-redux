import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./todoTypes";

export const addTodo = (todo) => {
  return {
    type: ADD_TASK,
    payload: todo,
  };
};

export const editTask = (id) => {
  return {
    type: EDIT_TASK,
    payload: id,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
