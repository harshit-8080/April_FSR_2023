function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (array[mid] == target) {
      return `${target} FOUND at Index ${mid} `;
    } else if (array[mid] < target) {
      start = mid + 1; // Eliminate the left half of the current search range.
    } else {
      end = mid - 1; //  Eliminate the right half of the current search range.
    }
  }

  return "TARGET NOT FOUND";
}

const arr = [10, 20, 30, 40, 50, 60, 70, 80];
const target = 10;

let result = binarySearch(arr, target);
console.log(result);
