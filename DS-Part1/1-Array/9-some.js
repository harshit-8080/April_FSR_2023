let arr = [19, 30, 43, 55, 99];

let hasEvenNumber = arr.some(function (element) {
  let bool = element % 2 == 0;
  return bool;
});

console.log(hasEvenNumber);
