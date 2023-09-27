const { sum, subtract } = require("../math");

test("add two number should get 30", () => {
  let result = sum(10, 20);
  expect(result).toBe(30);
});

test("add two number should get 10", () => {
  let result = sum(5, 5);
  expect(result).toBe(10);
});

test("subtract two number should get 20", () => {
  let result = subtract(35, 15);
  expect(result).toBe(20);
});
