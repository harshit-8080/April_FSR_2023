function orderFood(food, callback) {
  console.log("Food is ordered.....");

  callback(food);
}

function foodPrepared(food, callback) {
  console.log("Food is prepared..... Waiting for delivery Man");
  callback(food);
}

orderFood("burger", (food) => {
  console.log("Burger is Preparing");
  foodPrepared(food, () => {
    console.log("Delivery man is on the way to deliver your ", food);
  });
});
