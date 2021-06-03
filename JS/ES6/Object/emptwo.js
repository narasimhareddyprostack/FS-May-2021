let employee = {
  name: "Kavitha",
  age: 27,
  loc: "Bangalore",
  sal: 70000,
  getDetails: () => {
    return "Hello";
  },
};
console.log(employee.name);
console.log(employee.gender); // undefined
console.log(employee.getDetails()); // method
//console.log(employee.getFullDetails()); // error

console.log(typeof employee);
