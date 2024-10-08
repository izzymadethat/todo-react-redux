import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo";
import { v4 as uuid } from "uuid";

function TodoForm() {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();

  function handleAddTodo() {
    if (!todoInput) return;
    const todo = {
      id: uuid(),
      todo: todoInput,
      isCompleted: false,
    };
    dispatch(addTodo(todo));
    setTodoInput("");
    return;
  }

  return (
    <div>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={handleAddTodo} disabled={!todoInput}>
        Add Todo
      </button>
    </div>
  );
}

export default TodoForm;
