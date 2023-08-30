function bubbleSort(array) {
  let n = array.length; // 4

  for (let i = 0; i < n; i++) {
    // PASSES

    for (let j = 0; j < n - 1 - i; j++) {
      // CHECK FOR OUT OF ORDER
      if (array[j] > array[j + 1]) {
        //swap code
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

const arr = [7, 6, 4, 3, 10, 8, 98, 100];

bubbleSort(arr);

console.log(arr);
