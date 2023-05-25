let obj = {
  name: "john",
  age: 21,
  address: "india",
  salary: 2000,
  married: true,
};

console.log(obj);

Object.seal(obj);

// seal restrictions -> not allowed to add key value allow to modify key value

// obj.country = "USA";

obj.married = false;

console.log(obj);
