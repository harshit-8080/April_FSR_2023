function f1() {
  let x = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Moni"); // Resolve Value ---> "Moni"
    }, 2000);
    // Resolvoing Promise After Two Seconds
  });

  return x; // Promise Object
}

let p1 = f1();

// console.log(p1);  // Pending State

//TODO: If your promise is in Pending State, We can use then method to get Resolve Value.

//? To Get Resolve Value from Promise Object, We will be using then().

//? Inside then method, We will be passing a callback and which have a parameter (value).

//! In Case of SetTimeout() --> then method waits until Promise is resolved.

//! Once it resolved afterwards callback inside then method was executed.

let x = p1.then(function (value) {
  console.log(value); // "Moni"
  return "ABHI";
});

console.log("line 30 ===> ", x); //* Promise { <pending> }

let y = x.then(function (value) {
  console.log("line 33---> ", value); // "ABHI"
  //! In case you don't return resolved value will be undefined.

  return "Manohar";
});

console.log("line 38 ---> ", y); // Promise { <pending> }

y.then(function (value) {
  console.log("line 41 ===> ", value); // undefined....
});
