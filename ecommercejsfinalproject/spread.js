const obj = {
  name: "moni",
  country: "india",
  salary: 1000,
};

const { name, country, salary } = obj;

// console.log(name);
// console.log(country);
// console.log(salary);

/////////////////////////////////////////////////////////////////////

const obj1 = {
  name: "Harshit",
  salary: 500,
};

// const obj2 = { name: obj1.name, salary: obj1.salary, country: "india" };

// const obj2 = { ...obj1, country: "india" };

// console.log(obj2);

// // spread of array

// let arr = [1, 2, 3, 4];

// let arr2 = [100, ...arr, 200];

// console.log(arr2);

function f1(...c) {
  //   console.log(c); // [ 10, 20, 30, 40, 50, 60 ]
}

f1(10, 20, 30, 40, 50, 60);

const [a, b, ...c] = [10, 20, 30, 40, 50, 60];

console.log(a);
console.log(b);
console.log(c);
