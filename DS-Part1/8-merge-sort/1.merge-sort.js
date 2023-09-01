function mergeSort(arr) {
  // BASE CASE:
  if (arr.length <= 1) {
    return arr;
  }

  // STEP 1 : Divide the unsorted array into two halves.
  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  // STEP 2 : Recursively sort each half.
  const leftSorted = mergeSort(leftArr);
  const rightSorted = mergeSort(rightArr);

  // STEP 3 : Merge the sorted halves to produce a single sorted array.
  let finalSortedArray = merge(leftSorted, rightSorted);

  // RETURNING
  return finalSortedArray;
}

let arr = [15, 16, 7, 8, 10, 12, 100, 250, 7];

let x = mergeSort(arr);
console.log(x);

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;

  let mergeArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergeArray[k] = arr1[i];
      i++;
      k++;
    } else {
      mergeArray[k] = arr2[j];
      j++;
      k++;
    }
  }

  // REMAININGS ELEMENT for J
  while (j < arr2.length) {
    mergeArray[k] = arr2[j];
    j++;
    k++;
  }

  // REMAININGS ELEMENT for I
  while (i < arr1.length) {
    mergeArray[k] = arr1[i];
    i++;
    k++;
  }

  return mergeArray;
}
