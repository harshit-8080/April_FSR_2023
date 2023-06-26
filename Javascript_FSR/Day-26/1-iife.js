// const f1 = function () {
//   console.log("hello f1()");
// };
// f1();

//! IIFE

//? define iife
//? pass arg in iife
//? return from iife

//TODO: WHY IIFE......

let x = (function f1(country) {
  let name = "7876863728653827"; // secure

  function printName() {
    console.log(name);
  }

  return printName;
})();

// console.log(x); //

x();
