function f1() {
  let x = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Collect Your Burger");
    }, 2000);
  });

  return x;
}

//! f1() will return you promise object
async function promiseConsume() {
  console.log("Start");
  // We are using await keyword to pause our "function execution" until we get a resolve value
  let x = await f1();
  console.log(x);
  console.log("Thank for Your Service");
}

promiseConsume();

console.log("end");
