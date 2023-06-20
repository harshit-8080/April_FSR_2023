class Product {
  constructor(name, price, desc, company) {
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.company = company;
  }

  printProductName() {
    return this.name;
  }

  printProductInfo() {
    console.log("Product Name => ", this.name);
    console.log("Product Price => ", this.price);
    console.log("Product desc => ", this.desc);
    console.log("Product Company => ", this.company);
  }

  printRandomMessage(greet) {
    console.log("happy ", greet);
  }
}

const obj1 = new Product("Iphone13", 700000, "apple product", "Apple");
const obj2 = new Product("galaxy F41", 160000, "Samsung product", "Samsung");

// let name = obj1.printProductName(); // object.methodName
// let name2 = obj2.printProductName();

obj1.printProductInfo();
// obj2.printProductInfo();

// obj1.printRandomMessage("Diwali");
// obj1.printRandomMessage("Holi");
// obj1.printRandomMessage("New year");
