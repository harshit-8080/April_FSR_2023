const arr = [-12, -20, -13, -49, 30, 100];

// checks if the array contains every negative number

const result = arr.every((item) => {
  console.log(item);
  return item < 0;
});

console.log(result);
