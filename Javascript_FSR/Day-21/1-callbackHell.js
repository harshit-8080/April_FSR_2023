function setName(callback) {
  let name = "Harshit Raj";
  callback(name);
}

function greet(name, callback) {
  console.log("Happy Diwali = ", name);
  callback(name);
}

function askForGifts(name, callback) {
  console.log(`Where is Gifts for ${name} `);
  callback(name);
}

function returnGifts(name) {
  console.log(`Here is your Gifts ${name} -> https://gifts.com/6792`);
}

setName(function (name) {
  greet(name, function (name) {
    askForGifts(name, function (name) {
      returnGifts(name);
    });
  });
});
