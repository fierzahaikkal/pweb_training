import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/common/Button";

export const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState(["tes1", "tes2"]);

  function handleSubmit(event) {
    event.preventDefault();
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  }

  return (
    <div className="grid place-content-center bg-slate-900 min-h-screen">
      <div className="bg-white rounded grid px-4">
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(event) => {
              setNewTodo(event.target.value);
            }}
          ></input>
          <button type="submit">Add</button>
        </form>
        {todo.map((td, index) => (
          <h2 key={index}>{td}</h2>
        ))}
      </div>
    </div>
  );
};
