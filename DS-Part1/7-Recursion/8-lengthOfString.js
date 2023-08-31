function checkLength(str) {
  // BASE CASE
  if (str.length == 0) {
    return 0;
  }

  let length = 1 + checkLength(str.slice(1));

  return length;
}

let result = checkLength("computer");

console.log(result);
