import { useReducer } from "react";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import taskReducer from "./taskReducer.js";

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const getNextId = (datas) => {
    let maxId = datas.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );

    return maxId + 1;
  };

  //handlers
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text: text,
      id: getNextId(tasks),
    }); //added
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task: task,
    });
  };

  const handleDeleteTask = (taskid) => {
    dispatch({
      type: "deleted",
      id: taskid,
    });
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        tasks={tasks}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
