function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

// Demonstration
const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getCount());
