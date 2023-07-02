let name = "Moni";

function f1() {
  var country = "india";
  function f2() {
    console.log("line 6 ==>", name); // f1 MM checks with G MM
    var age = 1000;
    console.log("line 8 --> ", age); // 1000
    city = "Delhi"; // auto global ( it's inside G MM)
  }

  f2();
  console.log("line 13 --> ", country); // India
  console.log("line 14 --> ", city); // Delhi
}

f1();
console.log("line 18 --> ", city); // Delhi
