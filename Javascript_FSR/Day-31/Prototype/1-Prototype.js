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

Car.prototype.greet = function () {
  console.log("HappY Friday");
};

alto.__proto__.f1 = function () {
  console.log("Inside f1 function..");
};

// alto.printInfo();
// bmw5.printInfo();

bmw5.f1(); //

if (Car.prototype == bmw5.__proto__) {
  console.log("Yes They Are Same --> Unamed Object ");
}
