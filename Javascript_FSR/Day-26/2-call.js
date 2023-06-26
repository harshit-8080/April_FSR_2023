let obj1 = {
  name: "virat",
  country: "india",
};

let obj2 = {
  name: "smith",
  country: "australia",
};

let obj3 = {
  name: "root",
  country: "england",
};

function printNameAndCountry(greet, x) {
  //   console.log(this);
  console.log(
    `Name = ${this.name} and Country = ${this.country} and Greet = ${greet}`
  );
}

printNameAndCountry.call(obj1, "welcome", "HARSHIT");
printNameAndCountry.call(obj2, "bye", "HARSHIT");
printNameAndCountry.call(obj3, "happy", "HARSHIT");
