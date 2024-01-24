/* eslint-disable react/prop-types */

import Task from "./Task";

export default function TaskList({ onDeleteTask, onChangeTask, tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          onDeleteTask={onDeleteTask}
          onChangeTask={onChangeTask}
          task={task}
          key={task.id}
        />
      ))}
    </ul>
  );
}
