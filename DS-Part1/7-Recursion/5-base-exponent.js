function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  }

  let result = base * power(base, exponent - 1);
  return result;
}

let result = power(20, 5);
console.log(result);
