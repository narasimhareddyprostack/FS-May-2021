let userDetails = {
  name: "narasimha",
  password: 123,
  email: "greetlabs@gmail.com",
};

let newDetails = {
  name: "naraismha",
  email: "prostackacademy@gmail.com",
};
//How to merge object properties?
/* 1. Object.assign()
   2. spread Operator(...)
*/
let result = Object.assign(userDetails, newDetails);
console.log(result);
