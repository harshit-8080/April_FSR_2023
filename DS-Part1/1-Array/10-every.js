let arr = [1, 2, 3, 4, -5];

let allPositive = arr.every(function (element) {
  let bool = element > 0;
  return bool;
});

console.log(allPositive); 
