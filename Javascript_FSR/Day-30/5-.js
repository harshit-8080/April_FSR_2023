function f1() {
  //* 1. F1 MM and F1 CEM
  var name = "harshit"; // auto global
}

f1(); // G CEM makes a call and create functional Scope

console.log(name); // harshit
