import "../styles/TaskForm.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = (props) => {
  const { onSubmit, ...formProps } = props;

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    console.log(`%cwriting...`, "color:gray");
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
    };
    onSubmit(newTask);
  };

  return (
    <form action="" className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="what is there to do?"
        name="task-text"
        onChange={handleChange}
      />
      <button className="save-task">
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default TaskForm;
