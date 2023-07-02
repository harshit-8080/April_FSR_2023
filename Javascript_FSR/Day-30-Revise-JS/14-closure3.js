function f1() {
  let name = "Sagar";

  function f2() {
    function f3() {
      let country = "india"; // f3 MM --> Undefined --> india
      console.log(country); // India
      console.log(name); // Still remembers it's lexical scope
    }
    return f3;
  }

  let y = f2(); //  from f2 returns f3 function
  return y; // from f1 returns f3 function
}

let x = f1();

// f1 and f2 destroyed...

x(); // f3 function
