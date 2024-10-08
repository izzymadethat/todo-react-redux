import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask } from "../redux/todo";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const completedTodos = useSelector((state) => state.completed);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Current Todos:</h2>
      {todos.length > 0 &&
        todos.map((todo) => (
          <div key={todo.id} className="todo--item">
            <span className="todo--text">{todo.todo}</span>

            <button onClick={() => dispatch(editTask(todo.id))}>
              Mark as Complete
            </button>
            <button onClick={() => dispatch(deleteTask(todo.id))}>
              Delete
            </button>
          </div>
        ))}
      <h2>Completed</h2>
      {completedTodos.length > 0 && (
        <ul>
          {completedTodos.map((todo) => (
            <li key={todo.id} style={{ textDecoration: "line-through" }}>
              <span>{todo.todo}</span>
              <button onClick={() => dispatch(editTask(todo.id))}>
                Mark as Incomplete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
