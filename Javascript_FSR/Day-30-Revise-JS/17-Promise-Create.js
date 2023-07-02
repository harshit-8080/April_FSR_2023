function f1() {
  let x = new Promise(function (resolve, reject) {
    // resolve("Harshit");

    setTimeout(function () {
      resolve("Harshit"); // Resolving Promise After Two Seconds
    }, 2000);
  });

  return x; // Promise Object
}

let p1 = f1();
console.log(p1); // Promise { <pending> } --> Bcuz this is in pending state.
