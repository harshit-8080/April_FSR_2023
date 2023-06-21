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

async function f1(food) {
  let a = await placeOrder(food);
  let b = await completePayment(a);
  let c = await deliveryFood(b);
  enjoyFood(c);

  return "Divya";
}

let x = f1("pizza");

// console.log("line 35 ====> ", x); // undefined || Promise Object || Pizza ||undefined

x.then(function (value) {
  console.log("Line 39----> ", value);
});
