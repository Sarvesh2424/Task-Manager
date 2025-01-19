import React, { useState } from "react";

const AssignTask = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState("");

  function handleAssign() {
    if (!email) return alert("Please enter an email address");
    alert(`Task assigned to ${email}`);
    setEmail("");
  }

  if (!isVisible) return null;
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-3xl font-bold ml-4 my-2">Assign Task</h2>
        <div className="flex mt-4 items-center justify-evenly">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-black rounded-lg shadow-lg hover:shadow-2xl"
          />
        </div>
        <div className="mt-4">
          <button onClick={handleAssign} className="p-2 w-28 text-white mx-2 mt-2 mb-4 bg-black rounded-lg hover:bg-gray-800">
            Assign
          </button>
          <button
            onClick={onClose}
            className="p-2 w-28 text-white mx-2 mt-2 mb-4 bg-black rounded-lg hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignTask;
