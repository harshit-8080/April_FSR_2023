function outerFunction() {
  console.log("outer Function");

  function innerFunction() {
    console.log("inner Function");
  }
  return innerFunction();
}

let x = outerFunction();

console.log("printing x ===>", x);
