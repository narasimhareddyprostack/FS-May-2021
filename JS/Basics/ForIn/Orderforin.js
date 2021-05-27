let Order = {
  orderId: 101,
  order_Name: "Iphone 5s",
  prices: [50000, 60000, 70000],
  discounts: { manager_Discount: 5, CEO_Discount: 10 },
};
/* 
console.log(Order.orderId);
console.log(Order["order_Name"]);
console.log(Order.discounts);

console.log("................"); */

for (props in Order) {
  console.log(props, ":", Order[props]);
}
