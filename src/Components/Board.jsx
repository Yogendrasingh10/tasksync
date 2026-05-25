import Column from "./Column";
import TaskForm from "./TaskForm";

const Board = ({
  tasks,
  setTasks,
  search
}) => {
  const addTask = (title) => {
    const task = {
      id: Date.now(),
      title,
      status: "todo"
    };

    setTasks([...tasks, task]);
  };

  return (
    <div className="max-w-7xl mx-auto p-5">

      <TaskForm addTask={addTask} />

      <div className="grid md:grid-cols-3 gap-5 mt-6">

        <Column
          title="To Do"
          status="todo"
          tasks={tasks}
          setTasks={setTasks}
          search={search}
        />

        <Column
          title="In Progress"
          status="progress"
          tasks={tasks}
          setTasks={setTasks}
          search={search}
        />

        <Column
          title="Done"
          status="done"
          tasks={tasks}
          setTasks={setTasks}
          search={search}
        />

      </div>
    </div>
  );
};

export default Board;