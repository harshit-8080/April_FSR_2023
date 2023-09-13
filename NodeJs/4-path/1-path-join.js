const path = require("path");
const fs = require("fs");

// /Users/harshit/Desktop/april19/April_FSR_2023/NodeJs/4-path/newFolder/f1.txt

const fullPathOff1 = path.join(__dirname, "newFolder", "f1.txt");

console.log(fullPathOff1);
// /Users/harshit/Desktop/april19/April_FSR_2023/NodeJs/4-path/newFolder/f1.txt

fs.writeFileSync(fullPathOff1, "harshit");
