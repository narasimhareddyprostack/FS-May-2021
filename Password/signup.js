let bcrypt = require("bcryptjs");
let user = {
  id: 101,
  name: "Narasimha",
  email: "greetlabs@gmail.com",
  password: "123@123a",
  cc: "4444555566667777",
  cvv: "123",
};

let salt = bcrypt.genSaltSync(10);
let newPassword = bcrypt.hashSync(user.password, salt);

console.log(newPassword);
let newCC = bcrypt.hashSync(user.cc, salt);
console.log(newCC);
let newCVV = bcrypt.hashSync(user.cvv, salt);

//update user object with new - newPassword

user = { ...user, password: newPassword, cc: newCC, cvv: newCVV };
console.log(user);
