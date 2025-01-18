import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    category: "",
    dueDate: "",
  });

  return (
    <div className="flex flex-col w-96 h-auto gap-4 p-4 m-4 bg-blue-400 rounded-xl">
      <h2 className="text-lg">Add Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        className="p-2 border border-black rounded-lg"
      />
      <select
        value={newTask.category}
        onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
        className="p-2 border border-black rounded-lg"
      >
        <option value="Low">Work</option>
        <option value="Medium">Personal</option>
        <option value="High">Health</option>
        <option value="High">Education</option>
        <option value="High">Hobby</option>
        <option value="High">Household</option>
        <option value="High">Finance</option>
      </select>
      <input
        type="date"
        value={newTask.dueDate}
        onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        className="p-2 border border-black rounded-lg"
      />
      <button
        onClick={() => {
          addTask(newTask);
          setNewTask({
            title: "",
            category: "",
            dueDate: "",
          });
        }}
        className="p-2 w-28 text-white bg-black rounded-lg hover:bg-gray-800"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
