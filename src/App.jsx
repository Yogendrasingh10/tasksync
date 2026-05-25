import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Board from "./components/Board";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tasks");

    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />

      <Board
        tasks={tasks}
        setTasks={setTasks}
        search={search}
      />
    </div>
  );
}

export default App;