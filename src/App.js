import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Button from "react-bootstrap/Button";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      AddTask();
    }
  };

  const AddTask = () => {
    if (newTask !== "") {
      setTasks([{ text: newTask, completed: false }, ...tasks]);
      localStorage.setItem(
        "tasks",
        JSON.stringify([{ text: newTask, completed: false }, ...tasks])
      );
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const TaskChange = (index) => {
    const updatedTasks = [...tasks];
    const taskArray = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    const completedTask = taskArray.splice(index, 1)[0];
    updatedTasks[index].completed === true
      ? taskArray.push(completedTask)
      : taskArray.unshift(completedTask);

    setTasks(taskArray);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  };

  return (
    <div className="bg-dark-grey text-light-grey">
      <header className="text-center pb-3">
        <h1 className="display-4">To Do List</h1>
        <hr className="my-4" />
      </header>

      <div>
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
                    onChange={() => TaskChange(index)}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {task.text}
                </div>
                <div className="col-2">
                  <Button variant="danger" onClick={() => removeTask(index)}>
                    Remove Task
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="col-4">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="new task ..."
                onKeyDown={handleKeyDown}
                autoFocus
              />
            </div>
            <div className="col-2">
              <Button onClick={AddTask} variant="light">
                Add Task
              </Button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
