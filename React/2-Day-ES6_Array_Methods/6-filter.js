const arr = [11, 20, 33, 46];

const newArr = arr.filter((item, index) => {
  //   console.log(item, index);
  if (item % 2 != 0) {
    return item;
  }
});

console.log(newArr); // [11, 33]
