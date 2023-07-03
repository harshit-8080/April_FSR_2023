function f1() {
  let x = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Sorry Your Burger is out of stock");
    }, 2000);
  });

  return x;
}

//! then method is used for getting Resolve value......
//! catch method is used for getting or handling Rejected value......

f1()
  .then(function (value) {
    console.log("LIne 16 --->", value);
  })
  .catch(function (value) {
    console.log("LIne 19 --->", value);
  });
