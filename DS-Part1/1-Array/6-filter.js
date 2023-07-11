let arr1 = [10, 19, 32, 43, 55, 60, 99];

//! filter method creates new array with only elements that passes specific condition

let newArray = arr1.filter(function (element) {
  // element ---> 10
  let bool = element % 2 == 0;
  return bool;
});

console.log(newArray);

/*

 // element ---> 10  condition __ true. ( Return to new Array )

 // element ---> 19  condition __ false. ( Don't Return to new Array )

 // element ---> 32  condition __ true. ( Return to new Array )

 // element ---> 33  condition __ false. ( Don't Return to new Array )

 // element ---> 55  condition __ false. ( Don't Return to new Array )

// element ---> 60  condition __ true. ( Return to new Array )


*/
