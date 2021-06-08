class BankAccount {
  min_Bal = 500;
  constructor(acc_No, acc_Name, city) {
    this.acc_No = acc_No;
    this.acc_Name = acc_Name;
    this.city = city;
    console.log("Constructor execture only once, automatically");
  }
}
let acc1 = new BankAccount(101, "Sreekanth", "Bangalore");
console.log(acc1);
console.log(acc1.acc_Name);
let acc2 = new BankAccount(102, "Bhanu", "Chennai");
console.log(acc2);
