const fs = require("fs");

fs.writeFile("record.txt", "surajjjjjjj", (err) => {
  if (err) {
    console.log(err);
  }
});
