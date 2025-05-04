import React from "react";

function TaskItem({ task, index , onCompleteTask , onDeleteTask }) {
  return (
    <>
        <tr key={index}>
          <td>
          <div class="form-check">
          <input
              className="form-check-input ms-0"
              type="checkbox"
              value={task.isCompleted}
              id="checkDefault"
              onChange={() => onCompleteTask(index)}
              checked={task.isCompleted}
            />
            <label className="form-check-label ms-4" htmlFor="checkDefault">
              {task.text}
            </label>
            </div>
          </td>
          <td>
            <i className='bi bi-trash' onClick={() => onDeleteTask(index)}/>
          </td>
        </tr>
    </>
  );
}

export default TaskItem;
