function f1() {
  let x = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("HARSHIT");
    }, 2000);
  });

  return x;
}

// let p = f1();

// let z1 = p.then(function (value) {
//   console.log(value);

//   return "Suraj";
// });

// z1.then(function (value) {
//   console.log("line 18 ---> ", value);
// });

//////////////////////////////////////////////////////////////////

f1()
  .then(function (value) {
    console.log(value); // HARSHIT
    return "Rahul";
  })
  .then(function (value) {
    console.log(value); // Rahul
    return "Sagar";
  })
  .then(function (value) {
    console.log(value); // Sagar
  });
