import "../styles/Task.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const Task = (props) => {
  const { id, children, state, completeTask, deleteTask, ...taskProps } = props;
  return (
    <div className={`task ${state ? `${state}` : ""}`}>
      <div className="task-content" onClick={() => completeTask(id)}>
        {children}
      </div>
      <div className="task-icon-container" onClick={() => deleteTask(id)}>
        <AiFillCloseCircle className="task-icon" />
      </div>
    </div>
  );
};

export default Task;
