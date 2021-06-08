class Product {
  product_Name = "Iphone 12 mini";
  get_Product_Name() {
    return "hello";
  }
}

let obj1 = new Product();
console.log(obj1);
console.log(obj1.product_Name);
console.log(obj1.product_Price);
//If you are trying access object property, which is not existed in object ,
//it return undefined

//If you are trying access a method, which is not existed in object,
// it will throw error
console.log(obj1.get_Product_Name());
console.log(obj1.get_Discount());
