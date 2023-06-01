// function printMyName() {
//   // function definition
//   console.log("harshit raj");
//   let value = 20 * 10;
//   console.log(value);
// }

// printMyName(); // function call

function printFullName(firstName, lastName, age) {
  // accepting parameters
  let fullName = firstName + " " + lastName; // code
  return fullName; // returning value from function
}

let f1 = printFullName("harshit", "raj", 24); // passing arguments
let f2 = printFullName("Arun", "Kumar");
let f3 = printFullName("Pavan", "Jangale");

console.log(printFullName("Ramya", "--"));

console.log(f1, f2, f3);
