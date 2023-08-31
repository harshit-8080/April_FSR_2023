function sumOfArray(arr) {
  console.log(arr);
  // base case
  if (arr.length == 0) {
    return 0;
  }

  let result = arr[0] + sumOfArray(arr.slice(1, arr.length));

  return result;
}

let result = sumOfArray([10, 20, 30, 40, 50]);

console.log(result);
