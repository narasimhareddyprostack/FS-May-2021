const Address = require("./Address"); //ES5

//import Address from "./Address";//ES6

class Customer {
  constructor(cust_No, cust_Name, cust_age, address) {
    this.cust_No = cust_No;
    this.cust_Name = cust_Name;
    this.cust_age = cust_age;
    this.address = address;
  }
}
let c1 = new Customer(
  101,
  "Rajesh",
  24,
  new Address("14", "Marathahalli", "Bangalore", 560047, "Marathahalli Bridge")
);
console.log(c1);

module.exports = Customer;
