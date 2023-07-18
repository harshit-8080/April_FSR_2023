let a = 10;
let b = 10;

console.log(a == b); // true

let o1 = { name: "abc" }; //
let o2 = { name: "abc" }; //

console.log(o1 == o2); // false

let o3 = { name: "def" }; // x
let o4 = o3; // x

// line 17 is not true bcuz of same value ...
// line 17 is true bcuz of same reference ...

console.log(o3 == o4); // false or true

console.log(typeof o4); // object
