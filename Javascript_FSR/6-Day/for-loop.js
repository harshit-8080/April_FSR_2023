// console.log("harshit");
// console.log("harshit");
// console.log("harshit");
// console.log("harshit");
// console.log("harshit");
// console.log("harshit");
// console.log("harshit");
// console.log("harshit");
// console.log("harshit");
// console.log("harshit");

// write our first for loop

// for (let i = 0; i < 10; i=i+1) {
//   console.log(i);
// }

// first way to print the table..

// for (let i = 15; i <= 150; i = i + 15) {
//   console.log(i);
// }

// second way to print the table..
// let table = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(table, "*", i, "=", table * i);
// }

// if (arr[1] % 2 == 0) {
//   console.log("even number");
// } else {
//   console.log("odd number");
// }

// let arr = [10, 21, 33, 42, 57, 63, 72, 80, 91, 101];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     console.log("even number");
//   } else {
//     console.log("odd number");
//   }
// }

// let arr = [10, 21, 33, 42, 57, 63, 72, 80, 91, 101];

// for (let i = 0; i < arr.length; i = i + 2) {
//   console.log(arr[i]);
// }

// let arr = [10, 21, 33, 42, 57, 63, 72, 80, 91, 101];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// let arr = [10, 21, 33, 42, 57, 63, 72, 80, 91, 101];
// let key = 92;
// let found = false;
// let index;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == key) {
//     found = true;
//     index = i;
//     break;
//   }
// }

// if (found) {
//   console.log("key found at index " + index);
// } else {
//   console.log("key not found");
// }

let arr = [42, 10, 91, 21, 33, 42, 57, 42, 63, 72, 80, 80, 91, 101];
let key = 42;

let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == key) {
    count++;
  }
}

console.log("Key Frequency " + count);
