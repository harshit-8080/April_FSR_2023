function insertionSort(array) {
  let n = array.length;

  for (let i = 1; i < n; i++) {
    let currentElement = array[i];

    let j = i - 1;

    while (j >= 0 && array[j] > currentElement) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = currentElement;
  }
}

const arr = [7, 6, 4, 3, 10, 8, 98, 100];

insertionSort(arr);

console.log(arr);
