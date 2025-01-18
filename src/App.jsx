import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskCategories from "./components/TaskCategories";
import TaskTracker from "./components/TaskTracker";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [workTasks, setWorkTasks] = useState([]);
  const [personalTasks, setPersonalTasks] = useState([]);
  const [healthTasks, setHealthTasks] = useState([]);
  const [educationTasks, setEducationTasks] = useState([]);
  const [hobbyTasks, setHobbyTasks] = useState([]);
  const [householdTasks, setHouseholdTasks] = useState([]);
  const [financeTasks, setFinanceTasks] = useState([]);

  const addTask = (task) => {
    if (!task.title) return alert("Task title is required!");
    setTasks([...tasks, { ...task, id: Date.now(), status: "To Do" }]);
    if (task.category === "Work")
      setWorkTasks([
        ...workTasks,
        { ...task, id: Date.now(), status: "To Do" },
      ]);
    if (task.category === "Personal")
      setPersonalTasks([
        ...personalTasks,
        { ...task, id: Date.now(), status: "To Do" },
      ]);
    if (task.category === "Health")
      setHealthTasks([
        ...healthTasks,
        { ...task, id: Date.now(), status: "To Do" },
      ]);
    if (task.category === "Education")
      setEducationTasks([
        ...educationTasks,
        { ...task, id: Date.now(), status: "To Do" },
      ]);
    if (task.category === "Hobby")
      setHobbyTasks([
        ...hobbyTasks,
        { ...task, id: Date.now(), status: "To Do" },
      ]);
    if (task.category === "Household")
      setHouseholdTasks([
        ...householdTasks,
        { ...task, id: Date.now(), status: "To Do" },
      ]);
    if (task.category === "Finance")
      setFinanceTasks([
        ...financeTasks,
        { ...task, id: Date.now(), status: "To Do" },
      ]);
    console.log(workTasks[0]);
    console.log(tasks[0]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setWorkTasks(workTasks.filter((task) => task.id !== id));
    setPersonalTasks(personalTasks.filter((task) => task.id !== id));
    setHealthTasks(healthTasks.filter((task) => task.id !== id));
    setEducationTasks(educationTasks.filter((task) => task.id !== id));
    setHobbyTasks(hobbyTasks.filter((task) => task.id !== id));
    setHouseholdTasks(householdTasks.filter((task) => task.id !== id));
    setFinanceTasks(financeTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-cyan-300 to-white">
      <h1 className="p-10 text-center text-5xl bg-cyan-400 my-4 rounded-full">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskCategories
        workTasks={workTasks}
        personalTasks={personalTasks}
        healthTasks={healthTasks}
        educationTasks={educationTasks}
        hobbyTasks={hobbyTasks}
        householdTasks={householdTasks}
        financeTasks={financeTasks}
      />
      <TaskTracker
        tasks={tasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
