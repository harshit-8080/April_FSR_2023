let obj = {
  name: "john",
  age: 21,
  address: "india",
  salary: 2000,
  married: true,
};

console.log(obj);

Object.freeze(obj);

obj.married = false;

console.log(obj);
