function print1ToN(n) {
  if (n == 0) {
    return;
  }

  print1ToN(n - 1); // print 1 - 9

  console.log(n); // 10
}

print1ToN(10);

// function x() {
//   return;
// }

// console.log(x());
