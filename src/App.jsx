import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskCategories from './components/TaskCategories';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.title) return alert('Task title is required!');
    setTasks([...tasks, { ...task, id: Date.now(), status: 'To Do' }]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, status } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='p-10 text-center text-3xl'>Task Manager</h1>
      <TaskForm addTask={addTask}/>
      <TaskCategories tasks={tasks}/>
      <div className="task-lists">
        {['To Do', 'In Progress', 'Completed'].map((status) => (
          <div key={status} className="task-list">
            <h2>{status}</h2>
            {tasks.filter(task => task.status === status).map(task => (
              <div key={task.id} className="task">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Due: {task.dueDate}</p>
                <p>Priority: {task.priority}</p>
                {status !== 'Completed' && (
                  <button onClick={() => updateTaskStatus(task.id, status === 'To Do' ? 'In Progress' : 'Completed')}>
                    {status === 'To Do' ? 'Start' : 'Complete'}
                  </button>
                )}
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
