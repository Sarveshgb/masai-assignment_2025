const { addTask, listTasks, updateTask, deleteTask, setPreference } = require('./taskManager');
const [,, command, ...args] = process.argv;

switch (command) {
  case 'add-task':
    addTask(args[0], args[1]);
    break;
  case 'list-tasks':
    listTasks();
    break;
  case 'update-task':
    updateTask(args[0], args[1], args[2]);
    break;
  case 'delete-task':
    deleteTask(args[0]);
    break;
  case 'set-preference':
    setPreference(args[0], args[1]);
    break;
  default:
    console.log("❌ Unknown command. Try add-task, list-tasks, update-task, delete-task, set-preference.");
}
