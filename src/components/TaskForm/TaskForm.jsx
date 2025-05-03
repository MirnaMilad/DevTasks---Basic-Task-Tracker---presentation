import React, { useRef, useImperativeHandle, forwardRef } from "react";

const TaskForm = forwardRef(({ onAddTask }, ref) => {
  const taskNameRef = useRef();

  function onSubmit(e) {
    e.preventDefault()
    const taskName = taskNameRef.current.value.trim();
    if(taskName){
        onAddTask(taskName);
        taskNameRef.current.value = "";
    }
  }

  useImperativeHandle(ref, () => ({
    submit: () => {
        onSubmit({ preventDefault: () => {} });
      }
    }));

  return (
    <>
      <form onSubmit={onSubmit} className="mb-3">
        <input
          type="text"
          placeholder="Task Name"
          className="form-control mb-2"
          ref={taskNameRef}
        />
      </form>
    </>
  );
})

export default TaskForm;
