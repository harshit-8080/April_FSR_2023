console.log(myname); // undefined

var myname = "harshit";

console.log(myname); // harshit

function f1() {
  console.log(myname); // harshit
  address = "India";
  console.log(address); // india
}

f1();
console.log(address); // undefined....
