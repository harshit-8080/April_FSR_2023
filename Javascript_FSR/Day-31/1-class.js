class Car {
  // Properties
  constructor(color, maxSpeed, price) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.price = price;
  }

  // Method
  printCarInfo() {
    console.log(this.color);
    console.log(this.maxSpeed);
    console.log(this.price);
  }
}

// n no of properties & methods @ Moni

let alto = new Car("Red", "100", "400000");
let x1 = new Car("White", "180", "5000000");
let a5 = new Car("Black", "200", "600000");

// console.log(alto);
// console.log(x1);
// console.log(a5);

alto.printCarInfo();
console.log("============");
x1.printCarInfo();
console.log("============");
a5.printCarInfo();
