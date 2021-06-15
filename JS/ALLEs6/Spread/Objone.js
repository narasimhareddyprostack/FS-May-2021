let user = { id: 101, name: "Narasimha", email: "greetlabs@gmail.com" };
let userDetails = { email: "info@prostackacademy.com", address: "Bangalore" };

let newUserDetails = { ...user, ...userDetails };

console.log(newUserDetails);

// Array vs Object
