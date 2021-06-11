class CentralTax {
  constructor() {
    console.log("CentralTax class Constructor - 1");
  }
}

class StateTax extends CentralTax {
  constructor() {
    super();
    console.log("StateTax Class Constructor - 2");
  }
}
new StateTax();
