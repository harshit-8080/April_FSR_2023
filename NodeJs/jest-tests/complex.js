function calculateTotalPrice(prices) {
  let totalPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
  }

  return totalPrice;
}

function highestPrice(prices) {
  return Math.max(...prices);
}

module.exports = {
  calculateTotalPrice,
  highestPrice,
};
