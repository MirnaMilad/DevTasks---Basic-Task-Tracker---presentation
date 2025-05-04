import React, { useRef, useImperativeHandle, forwardRef } from "react";

const TaskForm = forwardRef(({ onAddTask = false }, ref) => {
  const taskNameRef = useRef();

  function onSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    const taskName = taskNameRef.current.value.trim();
    if (taskName) {
      onAddTask(taskName);
      taskNameRef.current.value = "";
    }
  }

  useImperativeHandle(ref, () => ({
    submit: () => {
      onSubmit({ preventDefault: () => {} });
    },
  }));

  return (
    <>
      <form onSubmit={onSubmit} className="card-header p-4">
        <div className="row">
          <div className="col-auto flex-grow-1">
            <input
              type="text"
              placeholder="Task Name"
              className="form-control"
              ref={taskNameRef}
            />
          </div>
          <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Add Task
              </button>
          </div>
        </div>
      </form>
    </>
  );
});

export default TaskForm;
