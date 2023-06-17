function placeOrder(food, callback) {
  console.log("Your Order is placed... => ", food);
  callback(food);
}

function completePayment(food, callback) {
  console.log(`Your Payment is Completed for ${food}`);
  callback(food);
}

function prepareFood(food, callback) {
  console.log(`Your ${food} is preparing....`);
  callback(food);
}

function outForDelivery(food, callback) {
  console.log(`Your ${food} is out for delivery`);
  callback(food);
}

function receiveDelivery(food, callback) {
  console.log(`Your ${food} is Delivered`);
  callback(food);
}

function enjoyFood(food) {
  console.log(`${food} is not tasty`);
}

placeOrder("Burger", function (food) {
  completePayment(food, function (food) {
    prepareFood(food, function (food) {
      outForDelivery(food, function (food) {
        receiveDelivery(food, function (food) {
          enjoyFood(food);
        });
      });
    });
  });
});
