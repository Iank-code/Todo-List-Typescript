import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField.js";
// import TodoList from "./components/TodoList.js";
import { Todo } from "./Model.js";

function App() {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  // Adds every todo to the todoArray
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([{ id: Date.now(), todo, isDone: false }, ...todos]);

      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      {/* <TodoList /> */}

      {todos.map((t, index) => (
        <li key={index}>{t.todo}</li>
      ))}
    </div>
  );
}

export default App;
