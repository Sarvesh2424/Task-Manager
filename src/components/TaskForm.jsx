import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    category: "Work",
    dueDate: "",
  });

  return (
    <div className="flex flex-col w-96 h-auto gap-4 p-4 m-8 bg-gradient-to-br from-blue-300 to-blue-600 rounded-3xl">
      <h2 className="text-3xl font-bold ml-4 my-2">Add Task</h2>
      <div className="w-72 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="title">Task: </label>
          <input
            type="text"
            placeholder="Enter Task"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="p-2 border w-48 border-black rounded-lg shadow-lg hover:shadow-2xl"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="category">Category: </label>
          <select
            value={newTask.category}
            onChange={(e) =>
              setNewTask({ ...newTask, category: e.target.value })
            }
            className="p-2 border w-48 border-black rounded-lg shadow-lg hover:shadow-2xl"
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Hobby">Hobby</option>
            <option value="Household">Household</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="dueDate">Due Date: </label>
          <input
            type="date"
            value={newTask.dueDate}
            onChange={(e) =>
              setNewTask({ ...newTask, dueDate: e.target.value })
            }
            className="p-2 border w-48 border-black rounded-lg shadow-lg hover:shadow-2xl "
          />
        </div>
      </div>
      <button
        onClick={() => {
          addTask(newTask);
          setNewTask({
            title: "",
            category: "Work",
            dueDate: "",
          });
        }}
        className="p-2 w-28 text-white mx-2 mt-2 mb-4 bg-black rounded-lg hover:bg-gray-800"
      >
        + Add Task
      </button>
    </div>
  );
};

export default TaskForm;
