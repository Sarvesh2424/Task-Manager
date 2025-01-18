const TaskTracker = ({ tasks, updateTaskStatus, deleteTask }) => {
  return (
    <div className="flex flex-col w-3/5 h-auto bg-gradient-to-br from-blue-300 to-blue-600 p-4 m-8 rounded-3xl">
      <h2 className="text-3xl font-bold my-2 ml-4">Task Tracker</h2>
      <div className="mt-4 flex flex-row justify-evenly gap-4">
        {["To Do", "In Progress", "Completed"].map((status) => (
          <div key={status} className="flex flex-col w-64 h-auto bg-white p-4 m-4 rounded-xl shadow-lg hover:shadow-2xl ">
            <h2 className="text-2xl font-semibold">{status}</h2>
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div key={task.id} className="task">
                  <h3 className="text-lg">{task.title}</h3>
                  <p className="text-blue-600">Categrory: {task.category}</p>
                  <p className="text-blue-600">Due: {task.dueDate}</p>
                  <div className="flex my-2 gap-4">
                    {status !== "Completed" && (
                      <button
                        onClick={() =>
                          updateTaskStatus(
                            task.id,
                            status === "To Do" ? "In Progress" : "Completed"
                          )
                        }
                        className="p-2 w-20 text-white bg-black rounded-lg hover:bg-gray-800"
                      >
                        {status === "To Do" ? "Start" : "Complete"}
                      </button>
                    )}
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="p-2 w-20 text-white bg-black rounded-lg hover:bg-gray-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTracker;
