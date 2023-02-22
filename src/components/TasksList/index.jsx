import React from "react";
import { useSelector } from "react-redux";

export default function TaskList() {
  //* содайте массив из слов и с помощью map сформируйте параграфы (1 параграф на 1 слово)
  //* const words = ['1', '2', '3', '4'];

  const tasks = useSelector(state => state.tasks);
  return (
    <div>
      {tasks.map((task) => (
        <p key={task}>{task}</p>
      ))}
    </div>
  );
}
