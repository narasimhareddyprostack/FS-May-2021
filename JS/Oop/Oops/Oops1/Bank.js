class BankCustomer {
  min_Bal = 500;
  constructor(a) {
    this.acc_Name = a;
    console.log("Execute only once- @ object creation");
  }
  get_Account_Name() {}
}
let narasimha_Obj = new BankCustomer("Narasimha", "9591619191", "Bangalore");
console.log(narasimha_Obj);
