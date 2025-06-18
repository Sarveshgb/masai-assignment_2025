function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

let person = {
  name: "Bob",
  age: 30,
};

personInfo.call(person); // Output: Name: Bob, Age: 30
