// Define Task 1
function taskOne() {
  console.log("Task 1 completed");
}

// Define Task 2 that accepts a callback
function taskTwo(callback) {
  console.log("Task 2 completed");
  callback(); // Execute callback after Task 2 finishes
}

// Call taskTwo and pass taskOne as the callback
taskTwo(taskOne);
