console.log("starting.....");

setTimeout(() => {
  console.log("second request-response");
  f1();
}, 4000);

function f1() {
  setTimeout(() => {
    console.log("third request-response");
  }, 1000);
}

console.log("ending.....");
