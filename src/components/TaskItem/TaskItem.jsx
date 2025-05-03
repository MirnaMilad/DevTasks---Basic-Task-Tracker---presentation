import React, { useRef } from "react";
import GenericModal from "../../shared/Modal/GenericModal";
import TaskForm from "../TaskForm/TaskForm";

function TaskItem({ task, index , onAddTask , onCompleteTask , onDeleteTask }) {
    const taskFormRef = useRef();
    const handleSave = () => {
        if (taskFormRef.current) {
          taskFormRef.current.submit();
        }
      };
  return (
    <>
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            <label className="form-check-label" htmlFor="checkDefault">
              {task.text}
            </label>
          </td>
          <td>
            <GenericModal buttonClass='bi-plus-circle' onSave={handleSave}>
                <TaskForm  ref={taskFormRef} onAddTask={onAddTask}/>
            </GenericModal>
          </td>
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              value={task.isCompleted}
              id="checkDefault"
              onChange={() => onCompleteTask(index)}
              checked={task.isCompleted}
            />
          </td>
          <td>
            <i className='bi bi-trash' onClick={() => onDeleteTask(index)}></i>
          </td>
        </tr>
    </>
  );
}

export default TaskItem;
