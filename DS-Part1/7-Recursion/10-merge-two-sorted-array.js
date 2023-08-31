function mergeTwoSortedArray(arr1, arr2) {
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

let x = mergeTwoSortedArray([5, 8, 15, 20, 30, 40], [3, 10, 12, 19]);

console.log(x);
