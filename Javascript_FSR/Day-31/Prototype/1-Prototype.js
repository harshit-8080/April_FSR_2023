function Car(name, price) {
  this.name = name;
  this.price = price;
}

let alto = new Car("Alto", "400000");
let bmw5 = new Car("BMW X1", "5000000");

// console.log(alto);

// console.log(Car.prototype); // {}

Car.prototype.printInfo = function () {
  console.log("Name == ", this.name);
  console.log("Price == ", this.price);
};

// console.log(Car.prototype); // { printInfo: [Function (anonymous)] }

// alto.printInfo();
// bmw5.printInfo();

// if (Car.prototype == bmw5.__proto__) {
//   console.log("Yes They Are Same --> Unamed Object ");
// }

if (Car.prototype.constructor == bmw5.__proto__.constructor) {
  console.log("Yes They Are Same --> ");
}
