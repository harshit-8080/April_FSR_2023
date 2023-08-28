function minimumForArray(array) {
  let miniIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[miniIndex] > array[i]) {
      miniIndex = i;
    }
  }

  return array[miniIndex];
}

const arr = [64, 10, 25, 12, 22, 10, 40, 19];

let mini = minimumForArray(arr);
console.log(mini);
