function fib(n) {
  if (n <= 1) {
    return n;
  }
  let result = fib(n - 1) + fib(n - 2);
  return result;
}

let x = fib(6);
console.log(x);
