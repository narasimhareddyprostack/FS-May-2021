class Order {
  min_Order_Value = 500; // Property
  get_Order_Value() {
    console.log(this.min_Order_Value);
    return this.min_Order_Value;
  }
}
let obj1 = new Order();

console.log(obj1);
console.log(this); // { }
console.log(this.min_Order_Value); // undefined
obj1.get_Order_Value();
