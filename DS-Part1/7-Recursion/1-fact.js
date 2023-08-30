function fact(n) {
  if (n == 0) {
    console.log("Factorial ==> ", 1);
    return;
  }
  let f = 1;

  for (let i = 1; i <= n; i++) {
    f = f * i;

    /**

    1= 1*1
    2= 1*2
    6 = 2*3
    24 = 6*4
    120 = 24 * 5

     */
  }

  console.log("Factorial ==> ", f);
}

fact(3);
