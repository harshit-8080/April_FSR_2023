let indianPlayer = {
  name: "Virat",
  country: "India",
  printInfo() {
    console.log(`Name = ${this.name} and Country = ${this.country}`);
  },
};

let australianPlayer = {
  name: "Smith",
  country: "Australia",
};

let englandPlayer = {
  name: "Root",
  country: "England",
};

let australiaPrintInfo = indianPlayer.printInfo.bind(australianPlayer);
let englandPrintInfo = indianPlayer.printInfo.bind(englandPlayer);

australiaPrintInfo();
australiaPrintInfo();

// When you want to create new function with specific this context use --> Bind.

// bind() method returns a new functions with the specified this context,

// That we can use it later as well.
