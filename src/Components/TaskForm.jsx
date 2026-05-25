import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={submit}
      className="flex gap-2"
    >
      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Add task..."
        className="flex-1 p-3 border rounded"
      />

      <button
        className="bg-blue-600 text-white px-5 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;