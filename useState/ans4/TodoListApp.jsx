import React, { useState } from "react";

function TodoListApp() {
  const [tasks, setTasks] = useState(["Buy milk", "Study React"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return; // ✅ Prevent empty task
    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  };

  const clearAll = () => {
    setTasks([]); // ✅ Clear all tasks
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📋 Todo List</h2>

      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={addTask}>Add Task</button>
      <button onClick={clearAll} style={{ marginLeft: "10px" }}>
        Clear All
      </button>

      <ul style={{ marginTop: "20px", paddingLeft: "20px" }}>
        {tasks.length === 0 ? (
          <p style={{ color: "gray" }}>No tasks available.</p>
        ) : (
          tasks.map((task, index) => <li key={index}>{task}</li>)
        )}
      </ul>
    </div>
  );
}

export default TodoListApp;
