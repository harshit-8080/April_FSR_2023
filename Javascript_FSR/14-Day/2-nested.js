let b = "Suraj";

function outerFunction() {
  //   console.log("outer function");
  var a = "Harshit";

  function innerFunction() {
    // console.log("inner function");

    function f1() {
      console.log(b); // Harshit
    }

    f1();
  }

  innerFunction();

  //   console.log(a);
}

outerFunction();
