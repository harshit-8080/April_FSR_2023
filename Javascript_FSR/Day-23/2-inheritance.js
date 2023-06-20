class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  parentMethod() {
    console.log("inside parent method");
  }
}

class Student extends Person {
  constructor(name, age, roll, college, branch) {
    super(name, age); // To call Parent constructor
    this.roll = roll;
    this.college = college;
    this.branch = branch;
  }
  childMethod() {
    console.log("inside child method");
  }
}

const s1 = new Student("Harshit", 24, 204, "LNCT", "CSE");

// console.log(s1);
// s1.childMethod();
// s1.parentMethod();

const p1 = new Person("Durga", 23);

p1.parentMethod();
p1.childMethod();
