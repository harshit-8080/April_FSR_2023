console.log("start");

function f1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Durga");
    }, 2000);
  });
}

let x = f1();
console.log(x);

console.log("end");
