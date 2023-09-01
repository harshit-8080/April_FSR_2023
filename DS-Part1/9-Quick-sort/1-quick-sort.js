function quickSort(arr) {
  // BASE CASE:
  if (arr.length <= 1) {
    return arr;
  }

  // Choose Pivot:
  const pivot = arr[0];

  // Partitioning:
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  // Recursion: Quick Sort to the sub-arrays on the left and right of the pivot.
  let leftSort = quickSort(leftArr);
  let rightSort = quickSort(rightArr);

  let finalSortArray = [...leftSort, pivot, ...rightSort];

  return finalSortArray;
}

let arr = [10, 9, 8, 7, 6, 5, 4, 3];

let x = quickSort(arr);

console.log(x);
