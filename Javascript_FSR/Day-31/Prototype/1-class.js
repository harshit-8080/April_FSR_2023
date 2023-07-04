class Car {
  // Properties
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // method
  printInfo() {
    console.log("Name == ", this.name);
    console.log("Price == ", this.price);
  }
}

let a5 = new Car("AudiA5", "6000000");

console.log(a5);

a5.printInfo();
