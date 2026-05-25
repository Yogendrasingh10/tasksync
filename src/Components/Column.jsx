import TaskCard from "./TaskCard";

const Column = ({
  title,
  status,
  tasks,
  setTasks,
  search
}) => {
  const filtered = tasks.filter(
    (task) =>
      task.status === status &&
      task.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 p-4 rounded-lg min-h-[400px]">
      <h2 className="text-xl font-bold mb-4">
        {title}
      </h2>

      <div className="space-y-3">
        {filtered.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;