import { useImmerReducer } from "use-immer";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import { TaskContext, TaskDispatchContext } from "./contexts/TaskContext.js";
import taskReducer from "./taskReducer.js";

export default function App() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  //handlers

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
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <h1>Prague itinerary</h1>
        <AddTask />
        <TaskList
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
          tasks={tasks}
        />
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
