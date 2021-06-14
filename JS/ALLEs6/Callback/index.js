let sum = (a, b) => {
  return a + b;
};
let mul = (a, b) => {
  return a * b;
};

let caluculate = (a, b, callback) => {
  return callback(a, b);
};

let result = caluculate(10, 20, sum); // function itself as argument
console.log(result);

result = caluculate(10, 20, mul); // function itself as argument
console.log(result);

result = caluculate(10, 20, (a, b) => {
  return a - b;
});
console.log(result);
