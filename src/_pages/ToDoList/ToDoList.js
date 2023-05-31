import React from "react";

import List from "./List";
import AddTaskInput from "./AddTaskInput";

const ToDoList = () => {
  /* 
  {
    text: String,
    completed: Boolean    
  }
  */
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  
  const setItemsInStorage = (_tasks) => {
    localStorage.setItem(
        "tasks",
        JSON.stringify(_tasks)
      );
  }

  const addTask = (newTask) => {
    if (!newTask) return ;
    
    let _tasks = [...tasks];
    _tasks = [{ text: newTask, completed: false }, ...tasks,]

      setTasks(_tasks);
      setItemsInStorage(_tasks);
  };

  const removeTask = (index) => {
    const _tasks = [...tasks];
    
    _tasks.splice(index, 1);
    
    setTasks(_tasks);
      setItemsInStorage(_tasks);
  };

  const checkTask = (index) => {
    let _tasks = [...tasks];
    
    const task = {..._tasks[index]};
    task.completed = !task.completed;
    
    _tasks.splice(index, 1);
    
    if (task.completed) _tasks = [..._tasks, task];
    else  _tasks = [task, ..._tasks];
    
    setTasks(_tasks);
      setItemsInStorage(_tasks);
  };

  return (
    <div className="bg-dark-grey text-light-grey" style={{minHeight: "100vh", height: "100vh", overflow: "hidden"}}>
      <header className="text-center pb-3">
        <h1 className="display-4">To Do List</h1>
        <hr className="my-4" />
      </header>

          <List tasks={tasks} checkTask={checkTask} removeTask={removeTask} />
          <AddTaskInput addTask={addTask} />
    </div>
  );
};

export default ToDoList;
