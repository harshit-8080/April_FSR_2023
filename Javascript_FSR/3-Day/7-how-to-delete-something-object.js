let obj = {
  name: "john",
  age: 21,
  address: "india",
  salary: 2000,
};

console.log(obj);

delete obj.salary;
delete obj.address;

console.log(obj);
