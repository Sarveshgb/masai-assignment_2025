const { updateTask, deleteTask, searchTasks } = require("./taskManager");

const command = process.argv[2];

switch (command) {
  case "update-task":
    const idOrTitle = process.argv[3];
    const newTitle = process.argv[4];
    const newDueDate = process.argv[5];
    if (!idOrTitle) return console.log("❗ Provide task ID or title.");
    updateTask(idOrTitle, newTitle, newDueDate);
    break;

  case "delete-task":
    const taskToDelete = process.argv[3];
    if (!taskToDelete) return console.log("❗ Provide task ID or title.");
    deleteTask(taskToDelete);
    break;

  case "search-tasks":
    const keyword = process.argv[3];
    if (!keyword) return console.log("❗ Provide a keyword to search.");
    searchTasks(keyword);
    break;

  case "help":
  default:
    console.log(`
📋 Available Commands:

👉 add-task <title> <dueDate>        - Add a new task
👉 list-tasks                        - List all tasks
👉 update-task <id|title> <newTitle> <newDueDate> - Update a task
👉 delete-task <id|title>            - Delete a task
👉 search-tasks <keyword>            - Search tasks by title or due date
👉 help                              - Show this help message
`);
    break;
}