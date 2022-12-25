import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      task.state = false;
      const uptatedTasks = [task, ...tasks];
      setTasks(uptatedTasks);
      console.log("%ctask added", "color: green");
    }
  };

  const deleteTask = (id) => {
    const uptatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(uptatedTasks);
    console.log("%cdeleted task", "color:orange");
  };

  const completeTask = (id) => {
    const uptatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.state = !task.state;
      }
      return task;
    });
    setTasks(uptatedTasks);
    console.log("%cupdate task", "color:aquamarine");
  };

  return (
    <>
      <h1>My Tasks</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </>
  );
};

export default ToDo;
