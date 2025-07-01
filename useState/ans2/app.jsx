import React, { useState } from "react";

const priorityOrder = { High: 1, Medium: 2, Low: 3 };

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const addTask = () => {
    if (title.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      priority,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(sortTasks(updatedTasks));
    setTitle("");
    setPriority("Medium");
  };

  const sortTasks = (taskList) => {
    return taskList.sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  };

  const toggleComplete = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(sortTasks(updated));
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) => {
    const priorityMatch =
      filterPriority === "All" || task.priority === filterPriority;
    const statusMatch =
      filterStatus === "All" ||
      (filterStatus === "Completed" && task.completed) ||
      (filterStatus === "Incomplete" && !task.completed);
    return priorityMatch && statusMatch;
  });

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px" }}>
      <h2>📝 Advanced Task Manager</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button onClick={addTask} style={{ marginLeft: "10px" }}>
          Add Task
        </button>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <strong>Filters: </strong>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option>All</option>
          <option>Completed</option>
          <option>Incomplete</option>
        </select>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ccc",
              backgroundColor: task.priority === "High" ? "#ffe5e5" : "#f9f9f9",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <div>
              <strong>[{task.priority}]</strong> {task.title}
            </div>
            <div>
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
