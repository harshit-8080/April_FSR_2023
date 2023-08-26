function f1(a) {
  console.log("inside function");
  console.log(a); // undefined
}

function f2() {
  console.log("I'm f2 function");

  return "moni";
}

f1(f2());
