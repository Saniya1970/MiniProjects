import React, { useState } from 'react';

const ToDoApp = () => {
  // State for managing tasks and filter
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on status
  const filterTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter((task) => task.completed);
      case 'incomplete':
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>

      {/* Form to add new tasks */}
      <form onSubmit={addTask}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Task filter buttons */}
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      {/* Task list */}
      <ul>
        {filterTasks().map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span
              onClick={() => toggleTaskCompletion(task.id)}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
