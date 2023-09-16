function f1(day) {
  console.log(this.name);
  //   console.log(day);
}

// console.log(f1);

// f1.call({ name: "suraj" }, "monday");
// f1.apply({ name: "chandan" }, ["saturday"]);

let abhiKaFunctionHai = f1.bind({ name: "abhi" }, "sunday");
let harshitKaFunctionHai = f1.bind({ name: "harshit" }, "sunday");
let surajtKaFunctionHai = f1.bind({ name: "suraj" }, "sunday");
let chandanKaFunctionHai = f1.bind({ name: "chandan" }, "sunday");

abhiKaFunctionHai();
harshitKaFunctionHai();
surajtKaFunctionHai();
chandanKaFunctionHai();

abhiKaFunctionHai();
harshitKaFunctionHai();
surajtKaFunctionHai();
chandanKaFunctionHai();

abhiKaFunctionHai();
harshitKaFunctionHai();
surajtKaFunctionHai();
chandanKaFunctionHai();

abhiKaFunctionHai();
harshitKaFunctionHai();
surajtKaFunctionHai();
chandanKaFunctionHai();

abhiKaFunctionHai();
harshitKaFunctionHai();
surajtKaFunctionHai();
chandanKaFunctionHai();
