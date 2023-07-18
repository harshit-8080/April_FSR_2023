const arr = [11, 21, 21, 32, 33, 47]; //

const firstEven = arr.findIndex((item) => {
  return item % 2 == 0;
});

console.log(firstEven);
