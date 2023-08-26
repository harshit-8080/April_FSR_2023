function returnMyMoney() {
  console.log("f1 function");

  let p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Credited 1000 Ruppes");
    }, 3000);
  });

  return p1;
}

// let x = returnMyMoney();

// let y = x.then(function (value) {
//   console.log(value); // Credited 1000 Ruppes
//   return "ok";
// });

// let z = y.then(function (value) {
//   console.log("line 20 ---> ", value); // ok

//   return "SACHIN";
// });

// z.then((value) => {
//   console.log("line 25 ---> ", value);
// });

// promise chaining.....

returnMyMoney()
  .then((value) => {
    console.log(value); // Credited 1000 Ruppes
    return "ok";
  })
  .then((value) => {
    console.log("line 36 ---> ", value); // ok
    return "SACHIN";
  })
  .then((value) => {
    console.log("line 40 ---> ", value);
    return "Seema";
  })
  .then((value) => {
    console.log("line 44 ---> ", value);
  });
