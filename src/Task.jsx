// TaskManager.js

import React, { useState } from 'react';
import './Task.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [updatedTaskText, setUpdatedTaskText] = useState('');
  const [assignedPerson, setAssignedPerson] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '' && assignedPerson.trim() !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: prevTasks.length + 1, text: newTask, done: false, assignedPerson },
      ]);
      setNewTask('');
      setAssignedPerson('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleDone = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const searchTasks = () => {
    return tasks.filter((task) => task.text.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const startEdit = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditingTask(taskId);
      setUpdatedTaskText(taskToEdit.text);
    }
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTask ? { ...task, text: updatedTaskText } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
    setUpdatedTaskText('');
  };

  const getUniqueAssignedPersons = () => {
    // Get unique assigned persons from tasks
    const assignedPersonsSet = new Set(tasks.map((task) => task.assignedPerson));
    return Array.from(assignedPersonsSet);
  };

  return (
    <div className='tbody'>
      <div className="task-manager">
        <h2 className="task-manager-title">Task Manager</h2>
        <div className="add-task">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
            className="task-input"
          />
          <input
            type="text"
            value={assignedPerson}
            onChange={(e) => setAssignedPerson(e.target.value)}
            placeholder="Assign to"
            className="task-input"
          />
          <button onClick={addTask} className="task-button add-button">
            Add Task
          </button>
        </div>
        <div className="search-task">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search tasks"
            className="task-input"
          />
        </div>
        <div className="assigned-persons">
          {getUniqueAssignedPersons().map((person) => (
            <div key={person} className="assigned-person-container">
              <h3>{person}'s Tasks</h3>
              <div className="task-list">
                {searchTasks()
                  .filter((task) => task.assignedPerson === person)
                  .map((task) => (
                    <div key={task.id} className={`task ${task.done ? 'done' : ''}`}>
                      {editingTask === task.id ? (
                        <>
                          <input
                            type="text"
                            value={updatedTaskText}
                            onChange={(e) => setUpdatedTaskText(e.target.value)}
                            className="edit-task-input"
                          />
                          <button onClick={updateTask} className="task-button update-button">
                            Update
                          </button>
                        </>
                      ) : (
                        <>
                          <span className="task-text">{task.text}</span>
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="task-button delete-button"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => toggleDone(task.id)}
                            className="task-button done-button"
                          >
                            {task.done ? 'Unmark' : 'Mark as Done'}
                          </button>
                          <button
                            onClick={() => startEdit(task.id)}
                            className="task-button edit-button"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;

