function outerFunction() {
    
  innerFunction();

  console.log("outer function...");

  function innerFunction() {
    console.log("inner function");
  }

  console.log("at line 8.....");
}

outerFunction();
