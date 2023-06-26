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

printNameAndCountry.apply(obj1, ["welcome", "HARSHIT"]);
printNameAndCountry.apply(obj2, ["bye", "HARSHIT"]);
printNameAndCountry.apply(obj3, ["happy", "HARSHIT"]);
