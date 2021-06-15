let user = {
  id: 101,
  name: "Narasimha",
  email: "greetlabs@gmail.com",
  password: "123@123a",
  cc: "4444555566667777",
  cvv: "123",
};
let userDetails = { city: "Hyderabad", mobile: 9591 };
let newDetails = { ...user, ...userDetails };

console.log(newDetails);
