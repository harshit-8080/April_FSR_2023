var a = 10;

function f1() {
  console.log("inside f1()");

  function f2() {
    console.log("inside f2()");
  }
  f2();
}

f1();
