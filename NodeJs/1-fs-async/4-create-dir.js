const fs = require("fs");

fs.mkdir("newFolder", (err) => {
  if (err) {
    console.log(err);
  }
});
