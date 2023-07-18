const arr = [116, 190, 83, 46]; // 46, 83, 116, 190

arr.sort((a, b) => {
  return b - a;
});

console.log(arr); // [ 46, 83, 116, 190 ] // asc

// [ 190, 116, 83, 46 ] // desc
