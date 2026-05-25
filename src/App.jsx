import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Board from "./components/Board";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <Board
        tasks={tasks}
        setTasks={setTasks}
        search={search}
      />
    </div>
  );
}

export default App;