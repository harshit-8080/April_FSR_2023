function f1() {
  let x = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Sagar");
    }, 2000);
  });

  return x;
}

async function promiseConsume() {
  let x = await f1();

  return "Durga";
}

//! In case IF you not return anything from async function, --> It will return you
//? Promise Object with Pending State

let x = promiseConsume();
x.then(function (value) {
  console.log(value);
});

async function f1() {
  let response = await fetch("url");
  let data = await response.json();

  return data;
}
