let name = "Moni"; // Undefined --> Moni --> Harshit --> Manohar

function f1() {
  name = "Harshit"; // f1 CEM
  function f2() {
    name = "Manohar"; // f2 CEM --> G MM
    console.log(name); //
  }

  f2();
}

f1();
