var a = 10;

function f1() {
  function f2() {
    function f3() {
      function f4() {
        console.log(a);
      }
      f4();
    }
    f3();
  }
  f2();
  console.log("inside f1 function");
}

f1();
