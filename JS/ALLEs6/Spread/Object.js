let employee = {
  id: 101,
  name: "kavitha",
  salary: 50000,
};

let employee_Details = { addrss: "Bangalore" };
let a = { ...employee, ...employee_Details };
let x = Object.assign(employee, employee_Details);

console.log(a);
console.log(x);
