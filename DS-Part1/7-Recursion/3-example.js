function fact(n) {
  if (n == 0 || n == 1) {
    return 1;
  }

  return n * fact(n - 1); // 10 * 9!
}

let result = fact(10);

console.log(result);
