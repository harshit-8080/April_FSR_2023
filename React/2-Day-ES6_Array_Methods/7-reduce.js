const arr = [10, 20, 30, 40]; // 100

let sum = arr.reduce((accumulator, item, index) => {
  accumulator = accumulator - item;

  console.log(index); // any guess

  return accumulator;
}, 1000);

console.log(sum); //  200

/*

10 - 20 = -10

-10 -30 ==> -40

-40 -40 => -80

*/
