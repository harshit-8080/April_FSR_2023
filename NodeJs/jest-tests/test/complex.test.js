const { calculateTotalPrice, highestPrice } = require("../complex");

describe("calculateTotalPrice function", () => {
  it("should calculate the total price", () => {
    const totalPrice = calculateTotalPrice([10, 20, 30, 40, 50, 60]);
    expect(totalPrice).toBe(210);
  });

  it("should not calculate the total price and ", () => {
    const totalPrice = calculateTotalPrice(10);
    expect(totalPrice).not.toEqual(210);
  });
});

describe("highestPrice function", () => {
  it("should return highest price", () => {
    const highestPrice1 = highestPrice([10, 20, 30, 40, 50, 60]);
    expect(highestPrice1).toBe(60);
  });

  it("should not return highest price", () => {
    const highestPrice2 = highestPrice([10, 20, 30, 40, 50, 60]);
    expect(highestPrice2).not.toEqual(210);
  });
});
