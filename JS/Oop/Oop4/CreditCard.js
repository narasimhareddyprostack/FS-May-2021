const Address = require("./Address");
const Customer = require("./Customer");
class CreditCard {
  constructor(a, b, c) {
    this.eligible = a;
    this.address = b;
    this.dummyCust = c;
  }
}
let cc1 = new CreditCard(
  "Eligible",
  new Address(102, "JayNagar", "Bangalore", 566034, "Jayadev"),
  new Customer(1, 2, 3, 4)
);
console.log(cc1);
