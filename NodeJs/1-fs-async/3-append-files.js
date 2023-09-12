const fs = require("fs");

fs.appendFile("record.txt", "\nNew Pavan", (err) => {
  if (err) {
    console.log(err);
  }
});
