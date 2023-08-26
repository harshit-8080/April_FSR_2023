function f1() {
  function f2() {
    function f3() {
      a = 10;
    }

    f3();
  }

  f2();
}

f1();

console.log(a);
