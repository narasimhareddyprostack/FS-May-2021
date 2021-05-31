//What is JS Object ?  group of key value of pairs as single entity
//Object contains - Property name and property values

let employee = { name: "Narasimha Reddy", loc: "Bangalore", sal: 50000 };

// How to access Object Values ? using Object.
//console.log(employee.name);
// WAP to print all object propteries

// New Syntax is avaible ie for in
for (x in employee) {
  console.log(x, ":", employee[x]);
}
