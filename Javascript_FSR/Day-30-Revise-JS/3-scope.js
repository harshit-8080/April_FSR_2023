console.log(y);

function f1() {
  console.log("line 4 ==>", x);
  var x = 100;
  console.log("line 6==> ", y); //  Sagar
}

var y = "Sagar";

console.log(y);

f1();
