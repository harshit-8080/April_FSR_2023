function f1() {
  // create a promise..
  let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("harshit");
    }, 2000);
  });

  return promise1;
}

let p1 = f1();

// consume a promise
p1.then(function (value) {
  console.log(value); // harshit
  return "india";
}).then(function (value) {
  console.log(value);
});
