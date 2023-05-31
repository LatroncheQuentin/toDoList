import React from 'react';
import Button from '../../_components/Button';

const AddTaskInput = ({ addTask }) => {
  const [value, setValue] = React.useState("");
  
  const handleAddTask = () => {    
      addTask(value);
      setValue("");
  }
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddTask();
    }
  }
  
  return (
        <div className="row py-4">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="col-4">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="new task ..."
                onKeyDown={handleKeyDown}
                autoFocus
              />
            </div>
            <div className="col-2">
              <Button onClick={handleAddTask} >
                Add Task
              </Button>
            </div>
          </div>
        </div>
  );
};

export default AddTaskInput;