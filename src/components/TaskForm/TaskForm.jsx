import React, { useState, useRef } from "react";

function TaskForm() {
  const taskNameRef = useRef();
  const [tasks, setTasks] = useState([]);
  function onSubmit(e) {
    e.preventDefault()
    const taskName = taskNameRef.current.value;
    setTasks([...tasks, taskName]);
  }
  return (
    <>
      <form onSubmit={onSubmit} className="mb-3">
        <input
          type="text"
          placeholder="Task Name"
          className="form-control mb-2"
          ref={taskNameRef}
        />
        <button type="submit" className="btn btn-primary mb-2">Submit</button>
      </form>
    </>
  );
}

export default TaskForm;
