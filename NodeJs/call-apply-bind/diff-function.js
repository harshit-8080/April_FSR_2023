function f1() {
  console.log("normal function");
}

const f2 = function () {
  console.log("function expression & anonymous function");
};

const f3 = () => {
  console.log("arrow function");
};

const f4 = () => "harshit";

const f5 = (_) => console.log("first function");

(function f6() {
  console.log("f 6 function");
})();
