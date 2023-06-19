function outerFunction() {
  let number = 200;

  function innerFunction() {
    console.log(number); // 200 || error || undefined || something else......
  }

  return innerFunction;
}

let x = outerFunction();

// x is just a function name ( innerFunction )

x(); // function call
