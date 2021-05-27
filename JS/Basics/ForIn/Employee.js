let employee = {
  name: "kavitha",
  sal: 50000,
  loc: "Bangalore",
  email: "greetlabs@gmail.com",
};
//how to access object props

/* console.log(employee.name);
console.log(employee.email); */

for (prop in employee) {
  console.log(prop, ":", employee[prop]);
}
