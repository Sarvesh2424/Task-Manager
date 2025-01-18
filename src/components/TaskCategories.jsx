import TaskCategory from "./TaskCategory";

const TaskCategories = ({
  workTasks,
  personalTasks,
  healthTasks,
  educationTasks,
  hobbyTasks,
  householdTasks,
  financeTasks,
}) => {
  return (
    <div className="flex flex-col w-4/5 h-auto bg-gradient-to-br from-blue-300 to-blue-600  p-4 m-8 rounded-3xl">
      <h2 className="text-3xl font-bold my-2 ml-4">Task Categories</h2>
      <div className="flex justify-center">
        <TaskCategory category="Work" tasks={workTasks} />
        <TaskCategory category="Personal" tasks={personalTasks} />
        <TaskCategory category="Health" tasks={healthTasks} />
        <TaskCategory category="Education" tasks={educationTasks} />
      </div>
      <div className="flex justify-center">
        <TaskCategory category="Hobby" tasks={hobbyTasks} />
        <TaskCategory category="Household" tasks={householdTasks} />
        <TaskCategory category="Finance" tasks={financeTasks} />
      </div>
    </div>
  );
};

export default TaskCategories;
