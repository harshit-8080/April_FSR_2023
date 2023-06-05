console.log(myname); // un.

var myname = "Divya";

console.log(myname); // Divya...

function f1() {
  if (true) {
    console.log(myname); // Err. || Divya
    let myname = "Arun";
  }
}

f1();
console.log(myname); // Arun
