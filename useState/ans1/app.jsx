import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() === "") return; // ✅ Prevent adding empty tasks
    setTasks([...tasks, { text: input.trim(), completed: false }]);
    setInput("");
  };

  const handleDeleteTask = (index) => {
    // ✅ Ensure correct task is deleted by filtering based on index
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    // ✅ Toggle completion and update UI
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul style={{ paddingLeft: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => handleToggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => handleDeleteTask(index)}
              style={{ marginLeft: "5px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
