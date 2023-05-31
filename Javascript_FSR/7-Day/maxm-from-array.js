let arr = [30, 90, 12, 27, 800, 60];

/**
 *
 *
 * run a loop....
 *
 * and make the first element as maximum value. (x)....
 *
 * and then compare with till the end of array....
 *
 * if you found bigger value update the (x) with bigger value....
 *
 * if you found lesser, Do nothing....
 *
 *
 */

let x = arr[0]; // asuming his is maximun balue

for (let i = 0; i < arr.length; i++) {
  if (x > arr[i]) {
    x = arr[i];
  }
}

console.log(x);
