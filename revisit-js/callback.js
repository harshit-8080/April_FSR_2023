function f1(x) {
  console.log("f1 function");
  x("Suraj");
}
function f3(x) {
  console.log("i'm f3 function");
  x("harshit");
}
function f4(x) {
  console.log("i'm f4 function");
  x("Moni");
}
function f5(x) {
  console.log("i'm f5 function");
  x("Mouni");
}

f1(function f2(name) {
  console.log(name);
  f3(function (name) {
    console.log(name);
    f4(function (name) {
      console.log(name);
      f5(function () {
        console.log(name);
      });
    });
  });
});
