// Select all necessary DOM elements
const colorInput = document.getElementById("color-input");
const textInput = document.getElementById("text-input");
const bgButton = document.getElementById("bg-btn");
const textButton = document.getElementById("text-btn");
const outputDiv = document.getElementById("output-div");

// Function to validate if color is recognized by browser
function isValidColor(color) {
  const temp = document.createElement("div");
  temp.style.color = color;
  return temp.style.color !== "";
}

// Event listener for "Change Background" button
bgButton.addEventListener("click", () => {
  const colorValue = colorInput.value.trim().toLowerCase();
  if (isValidColor(colorValue)) {
    outputDiv.style.backgroundColor = colorValue;
  } else {
    alert("Invalid color name!");
  }
});

// Event listener for "Update Text" button
textButton.addEventListener("click", () => {
  const textValue = textInput.value.trim();
  if (textValue.length === 0) {
    alert("Please enter some text!");
  } else {
    outputDiv.textContent = textValue;
  }
});
