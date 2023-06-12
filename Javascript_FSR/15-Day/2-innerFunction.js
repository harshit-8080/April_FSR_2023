function outerFunction() {
  let a = 10;

  let name = "harshit";

  function innerFunction() {
    console.log(a); // 10
    console.log(name); // harshit
  }

  return innerFunction;
}

let x = outerFunction();

x();
