import Task from "./Task";
import "../styles/TaskList.scss";

const TaskList = (props) => {
  const { children, tasks, deleteTask, completeTask, ...listProps } = props;

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          deleteTask={deleteTask}
          completeTask={completeTask}
        >
          {task.text}
        </Task>
      ))}
    </div>
  );
};

export default TaskList;
