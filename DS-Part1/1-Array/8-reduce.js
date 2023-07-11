let arr = [1000, 400, 200, 100];

let totalMoney = 10000; // 10000 - 1000 - 400 - 200 - 100 ==> 8300

// 1000 - 400 - 200 - 100 ==> 300

let value = arr.reduce(function (accumulator, element) {
  return accumulator - element;
}, 10000);

console.log(value);
