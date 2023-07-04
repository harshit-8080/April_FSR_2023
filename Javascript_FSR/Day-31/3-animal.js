class Person {
  constructor(name, age, isMarried) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }

  // Methods
  printBasicInfo() {
    console.log(
      `Name = ${this.name} -- Age = ${this.age} -- isMarried = ${this.isMarried}`
    );
  }
}

class Student extends Person {
  constructor(name, age, isMarried, roll, school) {
    super(name, age, isMarried); //! This is how you call your parent constructor
    this.roll = roll;
    this.school = school;
  }

  printDetailInfo() {
    console.log(
      `Name = ${this.name} -- Age = ${this.age} -- isMarried = ${this.isMarried} -- Roll = ${this.roll} -- School = ${this.school}`
    );
  }
}

let aman = new Student("Aman", "24", false, "30", "DAV School");
let najmin = new Student("Najmin", "24", false, "31", "DPS School");

najmin.printBasicInfo();
najmin.printDetailInfo();

let p1 = new Person("HARSHIT", "24", false);

p1.printBasicInfo();
p1.printDetailInfo();
