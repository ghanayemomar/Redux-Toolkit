import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form
      onSubmit={addTodoHandler}
      className="space-x-3 mt-12 flex flex-col items-center justify-center py-5 gap-y-5 bg-slate-700"
    >
      <label className="font-bold text-2xl text-white">Enter Todo</label>
      <input
        type="text"
        placeholder="enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 rounded-xl bg-slate-200 w-1/2"
      />
      <button type="submit" className="bg-slate-400 px-5 py-2 rounded-xl w-1/2">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
