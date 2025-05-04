import React, { useState, useEffect } from "react";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";

function TaskList() {
  const [taskList, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem("taskList");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const onAddTask = (taskName) => {
    const newTask = {
      id: Date.now(), // unique ID
      text: taskName,
      completed: false,
    };
    setTaskList((prev) => [...prev, newTask]);
  };

  const onCompleteTask = (index) => {
    const newTasks = [...taskList];
    newTasks[index].completed = !newTasks[index].completed;
    setTaskList(newTasks);
  };

  const onDeleteTask = (index) => {
    const newTasks = taskList.filter((_, i) => i !== index);
    setTaskList(newTasks);
  };

  return (
    <div className="container py-5">
      <h4 className="text-center mb-4">Task Manager</h4>
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
        <TaskForm onAddTask={onAddTask} />
        <div className="card-body py-0">
          {taskList.length === 0 ? (
            <p className="text-muted text-center mt-3">No tasks found.</p>
          ) : (
            <table className="table">
              {taskList.map((task, index) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  index={index}
                  onCompleteTask={onCompleteTask}
                  onDeleteTask={onDeleteTask}
                />
              ))}
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
