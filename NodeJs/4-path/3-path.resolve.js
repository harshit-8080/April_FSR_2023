const path = require("path");
const fs = require("fs");

const x = path.resolve("Desktop/code/harshit/f1.txt");

const data = fs.readFileSync(x);
console.log(data);
