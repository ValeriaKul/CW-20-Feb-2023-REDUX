import React from "react";
import { useDispatch } from "react-redux";

export default function AddTask() {
  const dispatch = useDispatch();
  const submit = (event) => {
    event.preventDefault();
    const { task } = event.target;
    dispatch({ type: "ADD", payload: task.value });
    task.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input type="text" name="task" placeholder=" Add task..."/>
      <button>Add task</button>
    </form>
  );
}
