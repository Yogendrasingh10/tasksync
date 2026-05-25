import {
  FaTrash,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const TaskCard = ({
  task,
  tasks,
  setTasks,
}) => {
  const removeTask = () => {
    setTasks(
      tasks.filter(
        (item) => item.id !== task.id
      )
    );
  };

  const moveNext = () => {
    const updated = tasks.map((item) => {
      if (item.id === task.id) {
        if (item.status === "todo")
          return {
            ...item,
            status: "progress",
          };

        if (item.status === "progress")
          return {
            ...item,
            status: "done",
          };
      }
      return item;
    });

    setTasks(updated);
  };

  const moveBack = () => {
    const updated = tasks.map((item) => {
      if (item.id === task.id) {
        if (item.status === "done")
          return {
            ...item,
            status: "progress",
          };

        if (item.status === "progress")
          return {
            ...item,
            status: "todo",
          };
      }

      return item;
    });

    setTasks(updated);
  };

  const editTask = () => {
    const value = prompt(
      "Edit Task",
      task.title
    );

    if (!value) return;

    setTasks(
      tasks.map((item) =>
        item.id === task.id
          ? { ...item, title: value }
          : item
      )
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow">

      <p
        className="font-medium cursor-pointer"
        onClick={editTask}
      >
        {task.title}
      </p>

      <div className="flex gap-2 mt-3">

        {task.status !== "todo" && (
          <button onClick={moveBack}>
            <FaArrowLeft />
          </button>
        )}

        {task.status !== "done" && (
          <button onClick={moveNext}>
            <FaArrowRight />
          </button>
        )}

        <button
          onClick={removeTask}
          className="text-red-500 ml-auto"
        >
          <FaTrash />
        </button>

      </div>
    </div>
  );
};

export default TaskCard;