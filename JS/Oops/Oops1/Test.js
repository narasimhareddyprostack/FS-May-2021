class Test {
  min_Bal = 500;
  constructor(name) {
    this.acc_Name = name;
    console.log("constructor will execute automatically");
  }
  get_Min_Bal() {
    console.log("Min Bal:", this.min_Bal);
  }

}

let obj1 = new Test("Sreekanth");
console.log(obj1.min_Bal);

console.log(obj1.get_Min_Bal());
console.log(obj1.get_Min_Bal());
console.log(obj1.get_Min_Bal());
console.log(obj1.get_Min_Bal());
//Constructor is special method, it will execute automatically at time object creations.
