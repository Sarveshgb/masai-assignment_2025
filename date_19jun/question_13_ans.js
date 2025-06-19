// Simulate loading screen using setInterval

let counter = 0;

// Start loading message every 1 second
const intervalId = setInterval(() => {
  console.log("Loading...");
  counter++;

  // After 5 seconds (5 iterations), stop loading
  if (counter === 5) {
    clearInterval(intervalId);
    console.log("Loaded successfully!");
  }
}, 1000);
