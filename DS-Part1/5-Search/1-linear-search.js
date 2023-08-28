function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] == target) {
      return `ELEMENT FOUND AT INDEX ${i} `; // Target FOUND
    }
  }
  return "Target NOT FOUND"; // Target NOT FOUND
}

const arr = [5, 2, 9, 1, 15, 61, 6, 9];
const target = 9;

let result = linearSearch(arr, target);
console.log(result);
