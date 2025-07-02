const fs = require('fs');
const { validateDate, validateTitle } = require('./utils');

const TASKS_FILE = './tasks.json';
const CONFIG_FILE = './config.json';

function loadTasks() {
  return fs.existsSync(TASKS_FILE) ? JSON.parse(fs.readFileSync(TASKS_FILE)) : [];
}

function saveTasks(tasks) {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

function loadConfig() {
  return fs.existsSync(CONFIG_FILE) ? JSON.parse(fs.readFileSync(CONFIG_FILE)) : { filter: 'all' };
}

function saveConfig(config) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
}

function addTask(title, dueDate) {
  if (!validateTitle(title) || !validateDate(dueDate)) return;
  const tasks = loadTasks();
  const newTask = {
    id: Date.now().toString(),
    title,
    dueDate,
    completed: false
  };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log("✅ Task added successfully.");
}

function listTasks() {
  const tasks = loadTasks();
  const config = loadConfig();
  const filtered = tasks.filter(task => {
    if (config.filter === 'completed') return task.completed;
    if (config.filter === 'pending') return !task.completed;
    return true;
  });
  console.table(filtered);
}

function updateTask(id, newTitle, newDueDate) {
  const tasks = loadTasks();
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return console.log("❌ Task ID not found.");

  if (newTitle && !validateTitle(newTitle)) return;
  if (newDueDate && !validateDate(newDueDate)) return;

  if (newTitle) tasks[index].title = newTitle;
  if (newDueDate) tasks[index].dueDate = newDueDate;

  saveTasks(tasks);
  console.log("✅ Task updated successfully.");
}

function deleteTask(id) {
  let tasks = loadTasks();
  const originalLength = tasks.length;
  tasks = tasks.filter(task => task.id !== id);
  if (tasks.length === originalLength) return console.log("❌ Task ID not found.");
  saveTasks(tasks);
  console.log("🗑️ Task deleted successfully.");
}

function setPreference(option, value) {
  const config = loadConfig();
  if (option !== 'filter' || !['all', 'completed', 'pending'].includes(value)) {
    return console.log("❌ Invalid preference. Usage: set-preference filter [all|completed|pending]");
  }
  config[option] = value;
  saveConfig(config);
  console.log("✅ Preference updated successfully.");
}

module.exports = { addTask, listTasks, updateTask, deleteTask, setPreference };
