const obj1 = {
  name: "chandan",
  country: "india",
  age: 22,
};
const obj2 = {
  name: "Suraj",
  country: "india",
  age: 23,
};
const obj3 = {
  name: "Abhi",
  country: "india",
  age: 24,
};

function f1(x) {
  console.log(this.name);
  console.log(this.age);
}

f1.call(obj1, 10);
f1.call(obj2);
f1.call(obj3);
