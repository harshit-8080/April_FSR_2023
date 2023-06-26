//! Function borrowing

let obj = {
  name: "Virat",
  country: "India",
  test: function () {
    console.log("test ");
  },
  print() {
    console.log(`Name = ${this.name} and Country = ${this.country}`);
  },
};

let obj2 = {
  name: "smith",
  country: "australia",
};

obj.print.call(obj2);

//TODO: (obj2 OBJECT )is borrowing print function which is inside (obj OBJECT)
