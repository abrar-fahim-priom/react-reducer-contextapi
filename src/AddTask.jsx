/* eslint-disable react/prop-types */

import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  function handleChangeText(e) {
    setText(e.target.value);
  }
  return (
    <>
      <input value={text} onChange={handleChangeText} placeholder="Add task" />
      <button
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
