function outerFunction() {
  let a = 10;
  function innerFunction() {
    console.log(a);
  }

  return innerFunction;
}

let x = outerFunction();

x();
