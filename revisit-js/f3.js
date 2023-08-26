let a = 1000;

function f1() {
  console.log("I'm f1 function");

  function f2() {
    console.log("I'm f2 function");
    console.log(a);
  }

  return f2;
}
let x = f1();

x();
