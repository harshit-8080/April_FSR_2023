async function f1() {
  console.log("start");
  console.log("end");

  return "HARSHIT";
}

let x = f1();

x.then(function (value) {
  console.log(value);
});
