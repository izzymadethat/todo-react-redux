// import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <TodoForm />
      <Todos />
    </>
  );
}

export default App;
