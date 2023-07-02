function f1(name, x) {
  console.log("starting inside f1 function");
  console.log(name);

  console.log("Line 5==>", x);

  let z = x("Happy Sunday"); //* Arg or Para
  console.log("line 8===> ", z); //* Suraj
}

f1("Harshit", function (greet) {
  console.log("This is my callback function");
  console.log(greet);

  return "Suraj"; //* Valid or InValid
});

//! How you can pass a callback
//! How you can pass a argument while calling callback ?
//! How you can accept as a paramter in callback ?
//! How you can return a value from callback ?
