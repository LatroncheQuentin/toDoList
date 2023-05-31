import React from 'react';
import Button from '../../_components/Button';

const List = ({ tasks, checkTask, removeTask }) => {
  return (
        <div className="row">
          <div className="col-2"></div>
    <ul className="list-group col scrollable-list bg-light-grey">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="list-group-item d-flex align-items-center"
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          <div className="col">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => checkTask(index)}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {task.text}
          </div>
          <div className="col-2">
            <Button color="danger" onClick={() => removeTask(index)}>
              Remove Task
            </Button>
          </div>
        </li>
      ))}
    </ul>
          <div className="col-2"></div>
        </div>
  );
};

export default List;