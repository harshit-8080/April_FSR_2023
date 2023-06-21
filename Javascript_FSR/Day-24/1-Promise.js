function placeOrder(food) {
  return new Promise(function (resolve, rejecct) {
    console.log(`Your ${food} is placed`);
    resolve(food); // burger
  });
}

function completePayment(food) {
  return new Promise(function (resolve, rejecct) {
    console.log(`Payment is done for ${food}`);
    resolve(food);
  });
}

function deliveryFood(food) {
  return new Promise(function (resolve, rejecct) {
    console.log(`Delivery is done for ${food}`);
    resolve(food);
  });
}

function enjoyFood(food) {
  console.log(`Enjoying my ${food}`);
}

let x = placeOrder("Burger");

x.then(function (value) {
  return value;
})
  .then(function (value) {
    let a = completePayment(value);
    return a;
  })
  .then(function (value) {
    let b = deliveryFood(value);
    return b;
  })
  .then(function (value) {
    enjoyFood(value);
  });

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// 1st Promise...
// let y = x
//   .then(function (value) {
//     console.log("line 29 ===> ", value); // burger

//     return "Suraj";
//   })
//   .then(function (value) {
//     console.log(value); //
//     return "SAGAR";
//   })
//   .then(function (value) {
//     console.log(value);
//     return "Durga";
//   })
//   .then(function (value) {
//     console.log(value);
//   });
