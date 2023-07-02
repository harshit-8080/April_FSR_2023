console.log(num); // undefined
var num = 100; // Undefined --> 100
console.log(num); //100

function f1() {
  var num = 200; // As f1 MM num = undefined --> 200
  console.log(num); // 200
  //! After f1 CEM DONE --> Function Scope f1 will be destroyed.
}

f1(); // Brand New Functional Scope will be created with f1 MM and f1 CEM

function f2() {
  var num = 300; // As f2 MM num = undefined --> 300
  console.log(num); // 300
  //! After f2 CEM DONE --> Function Scope f2 will be destroyed.
}

f2(); // Brand New Functional Scope will be created with f2 MM and f2 CEM
