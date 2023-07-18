const arr = [12, 20, 13, 49, -30, -100];

// checks if the array contains any negative number

const result = arr.some((item) => {
  console.log(item);
  return item < 0;
});

console.log(result); // true or false
