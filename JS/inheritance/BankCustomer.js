class Address {
  city = "Bangalore";
  get_Customer_Landmark() {}
}
class BankCustomer extends Address {
  min_Bal = 500;
  constructor(acc_No, acc_Name, age) {
    super();
    this.acc_No = acc_No;
    this.acc_Name = acc_Name;
    this.age = age;
  }
  get_Customer_Details() {
    console.log("Customer Details");
  }
  get_Bal() {
    return this.min_Bal;
  }
}

let c1 = new BankCustomer("7654", "Rak Kumar", 38);
console.log(c1);
//console.log(c1.min_Bal);

/*
1. How to initilize object values
   - using constructor
   -special method it will excute only once , @ of object creation
2. Object Ref / Obj/ Reference variable


*/
