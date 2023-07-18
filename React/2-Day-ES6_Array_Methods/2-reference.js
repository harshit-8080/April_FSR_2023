const obj = {
  name: "pavan",
};

obj.name = "virat";

console.log(obj);

console.log(typeof obj);

const arr = [10, 20, 30];
console.log(typeof arr); // object || array

console.log(Array.isArray(obj)); // false
console.log(Array.isArray(arr)); // true

function f1() {
  console.log("hello");
}

console.log(typeof f1); // function