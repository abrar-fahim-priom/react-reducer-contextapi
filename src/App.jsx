import { useState } from "react";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (datas) => {
    maxId = datas.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );

    return maxId + 1;
  };

  //handlers
  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    const nextTask = tasks.map((t) => {
      if (t.id == task.id) {
        return task;
      } else {
        return t;
      }
    });

    setTasks(nextTask);
  };

  const handleDeleteTask = (taskid) => {
    setTasks(tasks.filter((t) => t.id !== taskid));
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
