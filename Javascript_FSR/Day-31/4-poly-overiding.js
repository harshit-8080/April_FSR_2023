class ParentClass {
  constructor() {}

  f1() {
    console.log("Parent f1 is Invoked ");
  }
}

//? You can overide Pareent method inside your Child Class --> Overid

class ChildClass extends ParentClass {
  constructor() {
    super(); // call your parent constructor
  }
  f1() {
    console.log("Parent f1 is Invoked ");
  }
}

let childObject = new ChildClass();

childObject.f1(); // OUTPUT
