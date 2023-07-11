let arr1 = [10, 20, 30, 40, 50, 60]; // 210

let reduceValue = arr1.reduce(function (x, element) {
  return x + element;
}, 100);

/*
     100 + 10 ==> 110
     110 + 20 ==> 130
     130 + 30 ==> 160
     160 + 40 ===> 200
     200 + 50 ===> 250
     250 + 60 ==> 310
*/

console.log(reduceValue);
