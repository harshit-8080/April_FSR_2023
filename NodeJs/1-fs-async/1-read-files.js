const fs = require("fs");

console.log("starting....");

fs.readFile("record.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("end....");
