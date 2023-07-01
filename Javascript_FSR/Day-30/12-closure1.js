function f1() {
  let name = "Harshit";

  function f2() {
    console.log(name); // Error
    // first Step : - f2 CEM checks in f2 MM
    // Second Step :-
  }

  return f2;
}

let x = f1();

x();

//f1 got destroyed but still f2 remembers and access line 2

// Bcuz => Closures ....
