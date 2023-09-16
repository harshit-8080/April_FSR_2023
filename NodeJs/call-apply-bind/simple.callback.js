function orderFood(food, callback) {
  console.log("Food is ordered.....");

  callback(food);
}

function test(callback) {
  console.log("test function");
  callback("chandan");
}
function test3(callback) {
  callback("harshit");
}

function test4(callback) {
  console.log("test function");
  callback("mouni");
}
function test5(callback) {
  callback("srk");
}

orderFood("pizza", (food) => {
  console.log(food);
  test((name) => {
    console.log(name);
    test3((name) => {
      console.log(name);
      test4((name) => {
        console.log(name);
        test5((name) => {
          console.log(name);
        });
      });
    });
  });
});
