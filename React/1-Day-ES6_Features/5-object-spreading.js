//

const o1 = { firstName: "Harshit" };
const o2 = { lastName: "Raj" };

const o3 = { ...o1, ...o2 }; // ES6
// console.log(o3);

// ES5

const o3ES5 = Object.assign(o1, o2, { job: "Dev" });
console.log(o3ES5);

let keys = Object.keys(o3ES5);
console.log(keys);

let values = Object.values(o3ES5);
console.log(values);

let entries = Object.entries(o3ES5);
console.log(entries);
