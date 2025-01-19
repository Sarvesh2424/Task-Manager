import { useState } from "react";

const SetRemainder = ({ isVisible, onClose }) => {
  const [time, setTime] = useState("");

  function handleAssign() {
    if (!time) return alert("Please enter a valid date and time");
    alert(`Remainder set to ${time}`);
    setTime("");
  }

  if (!isVisible) return null;
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-3xl font-bold ml-4 my-2">Set Remainder</h2>
        <div className="flex mt-4 items-center gap-4 justify-evenly">
          <label htmlFor="time">Date and Time:</label>
          <input
            type="datetime-local"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-2 border border-black rounded-lg shadow-lg hover:shadow-2xl"
          />
        </div>
        <div className="mt-4">
          <button
            onClick={handleAssign}
            className="p-2 w-28 text-white mx-2 mt-2 mb-4 bg-black rounded-lg hover:bg-gray-800"
          >
            Set
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

export default SetRemainder;
