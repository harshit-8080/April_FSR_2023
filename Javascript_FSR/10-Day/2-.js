console.log(a);

var a = 20; //

function f1() {
  console.log(a);
  var a = 10;
  console.log(a);
}

f1(); //

console.log(a); // 20
