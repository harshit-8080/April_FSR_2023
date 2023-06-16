console.log("start");

function f1() {
  console.log("inside f1()");
}

f1();

function f2() {
  console.log("inside f2()");
  f1();
}

f2();

console.log("end");
