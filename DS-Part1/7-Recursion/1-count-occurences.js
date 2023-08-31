function countChar(str, char) {
  if (str.length === 0) {
    return 0;
  }

  let checkFirst = str[0] === char ? 1 : 0;

  let result = checkFirst + countChar(str.slice(1), char);

  return result;
}

let x = countChar("harrrrrrrrrshit", "r");

console.log(x);
