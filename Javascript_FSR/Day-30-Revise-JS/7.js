function f1() {
  const num = 100;
  console.log(num);
  num = 2000; // TypeError: Assignment to constant variable.
  console.log(num);
}

f1();
