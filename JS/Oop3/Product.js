class Product {
  product_Name = "iphone se";
  get_Product() {
    console.log(this);
    //access class member
    console.log(this.product_Name);
  }
}
let prod1 = new Product();
prod1.get_Product();

console.log(this);
