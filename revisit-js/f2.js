function f1(x, name, f2222, f3333) {
  console.log("inside function");
  console.log(x);
  console.log(name);
  f2222();
  f3333();
}

function f2() {
  console.log("I'm f2 function");
}
function f3() {
  console.log("I'm f3 function");
}

f1(10, "harshit", f2, f3);
