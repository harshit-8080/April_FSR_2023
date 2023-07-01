function f1() {
  let name = "Harshit";

  function f2() {
    function f3() {
      console.log(name);
    }
    return f3;
  }

  let f3 = f2();
  return f3;
}

let x = f1();

x(); // f3 function
