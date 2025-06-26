const ul = document.querySelector("#item-list");
const button = document.querySelector("#add-btn");

button.addEventListener("click", () => {
  const newLi = document.createElement("li");
  const currentItems = ul.children.length + 1;
  newLi.textContent = `Item ${currentItems}`;

  // Apply class based on odd/even position
  if (currentItems % 2 === 0) {
    newLi.classList.add("even");
  } else {
    newLi.classList.add("odd");
  }

  ul.appendChild(newLi);
});
