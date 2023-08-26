function returnSachin() {
  let p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Sachin");
    }, 1000);
  });

  return p1;
}

function returnSeema() {
  let p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Seema");
    }, 1000);
  });

  return p1;
}

async function getNames() {
  let name1 = await returnSachin();
  console.log(name1);

  let name2 = await returnSeema();
  console.log(name2);

  return "INDIA";
}

let x = getNames();
x.then((value) => {
  console.log("line 31 ---> ", value); //
});
