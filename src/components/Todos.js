import React from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const dispatch = useDispatch();

  const handleDelete = (todo) => {
    dispatch(removeTodo(todo.id));
  };
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div className="bg-slate-100 font-bold py-10 flex items-center justify-center text-4xl">
        Todos List:
      </div>
      <div className="mt-10 flex flex-col gap-y-5 items-center bg-slate-400">
        {todos.map((todo) => (
          <div key={todo.id}>
            <div className="flex flex-row justify-around w-screen py-2">
              {todo.text}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                  className="w-10 h-10"
                  onClick={() => handleDelete(todo)}
                >
                  {" "}
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />{" "}
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todos;
