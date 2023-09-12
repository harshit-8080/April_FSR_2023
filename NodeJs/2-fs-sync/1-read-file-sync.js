const fs = require("fs");

console.log("starting.....");

const data = fs.readFileSync("newRecord.txt", "utf-8");

console.log(data); // file data

console.log("end....");
