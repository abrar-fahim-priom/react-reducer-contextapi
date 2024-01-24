/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { TaskContext, TaskDispatchContext } from "./contexts/TaskContext";
import { getNextId } from "./utils/nextId";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TaskDispatchContext);
  const tasks = useContext(TaskContext);

  function handleChangeText(e) {
    setText(e.target.value);
  }
  return (
    <>
      <input value={text} onChange={handleChangeText} placeholder="Add task" />
      <button
        onClick={() => {
          dispatch({
            type: "added",
            text: text,
            id: getNextId(tasks),
          });
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
