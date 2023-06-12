function f1(callback) {
  callback("india", 1000, function f3(y) {
    console.log("inside f3()");
    console.log("Line 4 ===> ", y);
    y();
  });
}

f1(function f2(country, age, x) {
  console.log(country);
  console.log(age);

  x(function f4() {
    console.log("inside f4()");
  });
});
