var name = "Firdose";

function f1() {
  name = "CV";

  function f2() {
    name = "HARSHIT";
    console.log(name); //
  }

  f2();

  console.log(name); //
}

f1();

console.log(name);
