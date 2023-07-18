const arr = [10, 20, 30, 40];

// const newArrr = arr.concat([100, 200, 300]); // es5

// console.log(...arr);

const newArr = [...arr, 100, 200]; // es6

const latestArr = [...arr, ...newArr, "Harshit", "raj"];

console.log(latestArr);
