// Simulate fetching user data
function fetchUserData(callback) {
  console.log("Fetching user data...");

  setTimeout(() => {
    console.log("User data received");
    callback(); // Call the next task after 1s
  }, 1000);
}

// Simulate fetching user posts
function fetchUserPosts(callback) {
  console.log("Fetching user posts...");

  setTimeout(() => {
    console.log("User posts received");
    callback(); // Final task after 1.5s
  }, 1500);
}

// Start the sequence
fetchUserData(() => {
  fetchUserPosts(() => {
    console.log("All data loaded successfully!");
  });
});
