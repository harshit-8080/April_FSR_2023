let arr1 = [10, 20, 30, 40, 50, 60];

// map() is used to apply transformation to each element of an array
// and returns you a new array...

let newArray = arr1.map(function (element) {
  element = element * 100;

  return element;
});

console.log(newArray);

console.log(arr1);
