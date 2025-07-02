const fs = require("fs");

const path = "./task-manager/data.json";
function loadTasks() {
  if (!fs.existsSync(path)) return [];
  return JSON.parse(fs.readFileSync(path));
}
function saveTasks(tasks) {
  fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
}
function updateTask(idOrTitle, newTitle, newDueDate) {
  const tasks = loadTasks();
  const index = tasks.findIndex(
    (task) => task.id === idOrTitle || task.title === idOrTitle
  );

  if (index === -1) {
    console.log("❌ Task not found.");
    return;
  }

  if (newTitle) tasks[index].title = newTitle;
  if (newDueDate) tasks[index].dueDate = newDueDate;

  saveTasks(tasks);
  console.log("✅ Task updated successfully.");
}
function deleteTask(idOrTitle) {
  const tasks = loadTasks();
  const filtered = tasks.filter(
    (task) => task.id !== idOrTitle && task.title !== idOrTitle
  );

  if (tasks.length === filtered.length) {
    console.log("❌ No task found to delete.");
    return;
  }

  saveTasks(filtered);
  console.log("✅ Task deleted successfully.");
}
function searchTasks(keyword) {
  const tasks = loadTasks();
  const result = tasks.filter(
    (task) => task.title.includes(keyword) || task.dueDate.includes(keyword)
  );

  if (result.length === 0) return console.log("🔍 No matching tasks found.");

  result.forEach((task) =>
    console.log(`🆔 ${task.id} | 📌 ${task.title} | 📅 ${task.dueDate}`)
  );
}
module.exports = {
  updateTask,
  deleteTask,
  searchTasks,
};
