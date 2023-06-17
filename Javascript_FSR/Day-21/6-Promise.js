console.log("start");

function f2() {
  return new Promise(function (resolve, reject) {
    resolve("Sachin");
  });
}

let x = f2();

// .then is used to get resolve value from the promise objects
// callback inside .then will be executed only when you promise is resolved or fullfilled.
//! callback inside .then will be not executed if promise is in pending or in reject status

// .then chaining......

x.then(function (value) {
  console.log(value);
  return "Sagar";
})
  .then(function (value) {
    console.log("value ==> ", value);
    return "vada pav";
  })
  .then(function (value) {
    console.log("line 25 ", value);
    return "Virat";
  })
  .then(function (value) {
    console.log("line 25 ", value);
    return "DK";
  })
  .then(function (value) {
    console.log("line 25 ", value);
  });

console.log("end");
