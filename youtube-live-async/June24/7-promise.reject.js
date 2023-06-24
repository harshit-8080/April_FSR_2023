function f1() {
  // create a promise..
  let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("error at line 5");
    }, 1000);
  });

  return promise1;
}

f1()
  .then(function (value) {
    console.log(value);
  })
  .catch(function (value) {
    console.log(value);
  });
