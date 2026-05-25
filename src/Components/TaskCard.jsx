// import { useState } from "react";
// import {
//   FaTrash,
//   FaArrowLeft,
//   FaArrowRight,
//   FaEdit,
//   FaSave,
// } from "react-icons/fa";

// const TaskCard = ({ task, tasks, setTasks }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTitle, setEditedTitle] = useState(task.title);

//   const deleteTask = () => {
//     setTasks(tasks.filter((t) => t.id !== task.id));
//   };

//   const saveTask = () => {
//     setTasks(
//       tasks.map((t) =>
//         t.id === task.id
//           ? { ...t, title: editedTitle }
//           : t
//       )
//     );

//     setIsEditing(false);
//   };

//   const moveNext = () => {
//     setTasks(
//       tasks.map((t) => {
//         if (t.id === task.id) {
//           if (t.status === "todo")
//             return { ...t, status: "progress" };

//           if (t.status === "progress")
//             return { ...t, status: "done" };
//         }

//         return t;
//       })
//     );
//   };

//   const moveBack = () => {
//     setTasks(
//       tasks.map((t) => {
//         if (t.id === task.id) {
//           if (t.status === "done")
//             return { ...t, status: "progress" };

//           if (t.status === "progress")
//             return { ...t, status: "todo" };
//         }

//         return t;
//       })
//     );
//   };

//   return (
//     <div className="bg-white p-4 rounded shadow">

//       {isEditing ? (
//         <input
//           value={editedTitle}
//           onChange={(e) =>
//             setEditedTitle(e.target.value)
//           }
//           className="border p-2 rounded w-full"
//         />
//       ) : (
//         <h3 className="font-medium">
//           {task.title}
//         </h3>
//       )}

//       <div className="flex items-center gap-3 mt-4">

//         {task.status !== "todo" && (
//           <button onClick={moveBack}>
//             <FaArrowLeft />
//           </button>
//         )}

//         {task.status !== "done" && (
//           <button onClick={moveNext}>
//             <FaArrowRight />
//           </button>
//         )}

//         {isEditing ? (
//           <button
//             onClick={saveTask}
//             className="text-green-600"
//           >
//             <FaSave />
//           </button>
//         ) : (
//           <button
//             onClick={() => setIsEditing(true)}
//             className="text-blue-600"
//           >
//             <FaEdit />
//           </button>
//         )}

//         <button
//           onClick={deleteTask}
//           className="text-red-600 ml-auto"
//         >
//           <FaTrash />
//         </button>

//       </div>
//     </div>
//   );
// };

// export default TaskCard;



import { useState } from "react";
import {
  FaTrash,
  FaArrowLeft,
  FaArrowRight,
  FaEdit,
  FaSave,
} from "react-icons/fa";

const TaskCard = ({ task, tasks, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const saveTask = () => {
    if (!editedTitle.trim()) return;

    setTasks(
      tasks.map((item) =>
        item.id === task.id
          ? { ...item, title: editedTitle }
          : item
      )
    );

    setIsEditing(false);
  };

  const deleteTask = () => {
    setTasks(tasks.filter((item) => item.id !== task.id));
  };

  const moveNext = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          if (item.status === "todo") {
            return { ...item, status: "progress" };
          }

          if (item.status === "progress") {
            return { ...item, status: "done" };
          }
        }

        return item;
      })
    );
  };

  const moveBack = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          if (item.status === "done") {
            return { ...item, status: "progress" };
          }

          if (item.status === "progress") {
            return { ...item, status: "todo" };
          }
        }

        return item;
      })
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">

      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) =>
              setEditedTitle(e.target.value)
            }
            className="w-full border rounded p-2"
          />

          <button
            onClick={saveTask}
            className="bg-green-500 text-white px-3 py-1 rounded flex items-center gap-2"
          >
            <FaSave />
            Save
          </button>
        </div>
      ) : (
        <>
          <h3 className="font-medium mb-3">
            {task.title}
          </h3>

          <div className="flex items-center gap-3">

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
              onClick={() => setIsEditing(true)}
              className="text-blue-600"
            >
              <FaEdit />
            </button>

            <button
              onClick={deleteTask}
              className="text-red-600 ml-auto"
            >
              <FaTrash />
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;