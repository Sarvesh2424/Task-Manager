import React, { useState } from "react";
import AssignTask from "./AssignTask";
import SetRemainder from "./SetRemainder";

const TaskCategory = ({ category, tasks }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isRemainderVisible, setRemainderVisible] = useState(false);

  const handleAssignClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleNotifyClick = () => {
    setRemainderVisible(true);
  };

  const handleCloseRemainder = () => {
    setRemainderVisible(false);
  };

  return (
    <div className="flex flex-col w-64 h-auto bg-white p-4 m-4 rounded-xl shadow-lg hover:shadow-2xl">
      <h2 className="text-xl font-semibold">{category}</h2>
      {tasks.map((task) => {
        return (
          <div className="flex justify-between items-center m-2" key={task.id}>
            <div className="flex flex-col items-center text-black p-2">
              <h3 className="">{task.title}</h3>
              <p className="text-sm text-blue-600">Due: {task.dueDate}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                className="p-2 w-20 text-white bg-black rounded-lg hover:bg-gray-800"
                onClick={handleAssignClick}
              >
                Assign
              </button>
              <button
                className="p-2 w-20 text-white bg-black rounded-lg hover:bg-gray-800"
                onClick={handleNotifyClick}
              >
                Notify me
              </button>
            </div>
          </div>
        );
      })}
      <AssignTask isVisible={isModalVisible} onClose={handleCloseModal} />
      <SetRemainder
        isVisible={isRemainderVisible}
        onClose={handleCloseRemainder}
      />
    </div>
  );
};

export default TaskCategory;
