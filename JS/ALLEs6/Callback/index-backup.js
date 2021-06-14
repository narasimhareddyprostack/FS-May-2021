let caluculate = (a, b, operation) => {
  if (operation == "sum") {
    return a + b;
  }

  if (operation == "mul") {
    return a * b;
  }
};

let result = caluculate(10, 20, "sum");
console.log(result);

result = caluculate(10, 20, "mul");
console.log(result);
