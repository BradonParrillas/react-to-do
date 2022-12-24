import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useState } from "react";

const ToDo = () => {
  const taskExample = [
    {
      id: "1",
      text: "Ayudar a mi hermano en su tarea de fisica cuantica y matematica 3",
      state: "pending",
    },
    {
      id: "2",
      text: "Hacer la cena de Navidad",
      state: "pending",
    },
  ];
  const [tasks, setTasks] = useState(taskExample);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      task.state = "pending";
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
    console.log("%ccomplete task", "color:lightblue");
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
