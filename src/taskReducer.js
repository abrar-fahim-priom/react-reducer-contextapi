export default function taskReducer(draft, action) {
  if (action.type === "added") {
    draft.push({
      id: action.id,
      text: action.text,
      done: false,
    });
  } else if (action.type === "changed") {
    const index = draft.findIndex((t) => t.id === action.task.id);
    draft[index] = action.task;
  } else if (action.type === "deleted") {
    return draft.filter((t) => t.id !== action.id);
  } else {
    return `no action shooted from ${action.type}`;
  }
}
