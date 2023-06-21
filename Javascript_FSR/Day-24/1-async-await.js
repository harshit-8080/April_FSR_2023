function p1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Lokesh");
    }, 3000);
  });
}

async function f1() {
  console.log("start");

  let a = await p1(); // return you a resolved value..

  console.log(a);

  console.log("end");
}

f1();
