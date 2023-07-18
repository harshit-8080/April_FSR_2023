const arr = [10, 20, 30, 40];

let newArr = arr.map((item, index) => {
  return item + 1 + index;
});

console.log(newArr); // [10+1+0, 20+1+1, 30+1+2, 40+1+3  ] ==> [ 11, 22, 33, 44 ]
