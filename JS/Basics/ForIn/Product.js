let product = { product_Id: 501, product_Name: "Iphone 5s" };

// How to  access Object Properteis ?  for(in )

for (prop in product) {
  console.log(prop);
}

console.log(".....");
// How to access Object Property value ?
for (prop in product) {
  console.log(product[prop]);
}
