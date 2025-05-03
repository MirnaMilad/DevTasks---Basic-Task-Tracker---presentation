import React from "react";

function TaskItem({ task, index }) {
  return (
    <>
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            <label className="form-check-label" htmlFor="checkDefault">
              {task}
            </label>
          </td>
          <td>
            <i className="bi bi-plus-circle"></i>
          </td>
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="checkDefault"
            />
          </td>
          <td>
          <i className="bi bi-trash"></i>
          </td>
        </tr>
    </>
  );
}

export default TaskItem;
