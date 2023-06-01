function f1(num, x) {
  console.log("inside f1 function");
  console.log(num);
  x();
}

f1(10, function f2() {
  console.log("inside f2 function...");
});

// 1. Pass a function as an argument
