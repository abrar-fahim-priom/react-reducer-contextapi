export default function taskReducer(draft, action) {
  if (action.type === "added") {
    draft.push({
      id: action.id,
      text: action.text,
      done: false,
    });
  } else if (action.type === "changed") {
    return draft.map((t) => {
      if (t.id == action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === "deleted") {
    return draft.filter((t) => t.id !== action.id);
  } else {
    return `no action shooted from ${action.type}`;
  }
}
