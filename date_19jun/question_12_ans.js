// Asynchronous Code Execution using setTimeout

console.log("Message 1"); // Executes immediately

setTimeout(() => {
  console.log("Message 2 after 2 seconds"); // Executes after 2000ms
}, 2000);

console.log("Message 3"); // Executes immediately after Message 1
