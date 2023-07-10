let arr1 = [10, 20, 30, 40, 50];

let length = arr1.length; // Old Length

// console.log(length);

arr1.push(60); // Add element at last.

length = arr1.length;

// console.log(arr1);

// console.log(arr1[length - 1]); // 50 it should 60.

arr1.push("Harshit", true, { name: "sagar" });

// console.log(arr1);

arr1.unshift(0); // Add element at first position.

// console.log(arr1);

let x = arr1.pop(); // delete last item.

// console.log(x);
// console.log(arr1);

// console.log(arr1);

arr1.shift(); // delete first item.

// console.log(arr1);
// [ 10, 20, 30, 40, 50, 60, 'Harshit', true ]

let indexToDelete = 3; // 40
arr1.splice(indexToDelete, 3);

// arr1.splice(0, length - 1);

// arr1 = [];

console.log(arr1);
