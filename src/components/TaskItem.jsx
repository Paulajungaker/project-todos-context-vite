import { useTask } from "../context/TaskContext";
import { FaTrashAlt } from "react-icons/fa";
import "../styling/TaskItem.css";

const TaskItem = ({ task }) => {
  const { toggleTask, removeTask } = useTask();

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleRemove = () => {
    removeTask(task.id);
  };

  return (
    <div className="itemContainer">
      <li>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="itemCheckbox"
        />
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
        </span>
        <button onClick={handleRemove} className="itemButton">
          <FaTrashAlt />
        </button>
      </li>
    </div>
  );
};

export default TaskItem;
