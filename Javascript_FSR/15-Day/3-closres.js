let a = 200;
function outerFunction() {
  //   let a = 30;
  function innerFunction() {
    function f1() {
      console.log(a); // 20
    }

    return f1;
  }
  return innerFunction;
}

let x = outerFunction();

let y = x();

y();
