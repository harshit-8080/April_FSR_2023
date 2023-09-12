const fs = require("fs");

fs.unlink("record.txt", (err) => {
  if (err) {
    console.log(err);
  }
});
