function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let miniIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[miniIndex] > array[j]) {
        miniIndex = j;
      }
    }

    //SWAPING-----
    let temp = array[i];
    array[i] = array[miniIndex];
    array[miniIndex] = temp;
  }
}

const arr = [64, 10, 25, 12, 22, 10, 40, 19, 0];

selectionSort(arr);

console.log(arr);
