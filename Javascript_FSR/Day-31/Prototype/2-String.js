// function F1() {}

// F1.prototype.toDurga = function () {
//   console.log("This is Durga");
// };

// console.log(F1.prototype);

let s = "Durga";

String.prototype.isDurga = function () {
  if (this.valueOf() == "Durga") {
    return true;
  } else {
    return false;
  }
};

console.log(s.isDurga());

let arr = [10, 30, 40];

arr.indexOf(30);
