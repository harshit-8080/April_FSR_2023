let arr1 = [10, 20, 30, 40, 50, 60, "Harshit", true];

// console.log(arr1[2]); // 30

// console.log(arr1[arr1.length - 1]); // true

// Iterating Array.....
// [ 10, 20, 30, 40, 50, 60, 'Harshit', true ]

console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] == "Harshit") {
    arr1.splice(i, 1);
  }
}

console.log(arr1);
