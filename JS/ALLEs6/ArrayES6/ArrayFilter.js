let shirts = [
  { productName: "shirtOne", size: 40, price: 500 },
  { productName: "shirtTwo", size: 42, price: 600 },
  { productName: "shirtThree", size: 40, price: 700 },
  { productName: "shirtFour", size: 42, price: 1100 },
  { productName: "shirtFive", size: 44, price: 1500 },
];
/*
let offerShirts = [];
 
for (let i = 0; i < shirts.length; i++) {
  if (shirts[i].price > 1000) {
    offerShirts.push(shirts[i]);
  }
}
console.log(offerShirts); */

let newOffer = shirts.filter((value) => {
  return value.price > 1000;
});
console.log(newOffer);
