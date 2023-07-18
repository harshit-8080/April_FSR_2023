const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];

const [a, b, c, ...other] = arr;

console.log(a, b, c);

console.log(other);
