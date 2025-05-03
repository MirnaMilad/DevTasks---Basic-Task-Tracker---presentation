import React from "react";
import TaskItem from "../TaskItem/TaskItem";

function TaskList() {
  let taskList = ["task 1", "task 2"];
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task</th>
          <th scope="col">Add Task</th>
          <th scope="col">check</th>
          <th scope="col">delete</th>
        </tr>
      </thead>
      <tbody>
        {taskList.map((task, index) => {
          return <TaskItem key={index}  task={task} index={index} />;
        })}
      </tbody>
    </table>
  );
}

export default TaskList;
