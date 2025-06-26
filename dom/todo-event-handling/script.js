const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Function to create and add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  // Create elements
  const li = document.createElement("li");
  li.textContent = taskText;

  const btnContainer = document.createElement("span");
  btnContainer.className = "task-buttons";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.backgroundColor = "crimson";
  deleteBtn.style.color = "white";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.style.backgroundColor = "green";
  completeBtn.style.color = "white";

  // Append buttons to container
  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(deleteBtn);
  li.appendChild(btnContainer);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";

  // Delete functionality
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Complete functionality
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
}

// Add task on button click
addBtn.addEventListener("click", addTask);

// Optional: Add task on Enter key press
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
