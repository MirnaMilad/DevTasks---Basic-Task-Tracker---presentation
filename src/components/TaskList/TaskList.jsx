import React, { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";

function TaskList() {
  const [taskList, setTaskLIst] = useState([
    { id: 1, text: 'Learn React', completed: false },
  ]);

  function onAddTask(taskName){
    const newTask = {
        id: taskList.length,
        text: taskName,
        completed:false
    }
    setTaskLIst([... taskList , newTask])
  }

  function onCompleteTask(index){
    const newTaskList = [...taskList];
    newTaskList[index].completed = !newTaskList[index].completed;
    setTaskLIst(newTaskList);
  }

  function onDeleteTask(index){
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskLIst(newTaskList);
  }
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
          return <TaskItem key={index}  task={task} index={index} onAddTask={onAddTask} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask}/>;
        })}
      </tbody>
    </table>
  );
}

export default TaskList;
