let employee = { name: "Narasimha", age: 37, sal: "" };
let login = {
  status: "Login Success",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBjNGIxZTg5ODFjZDEyODE4ZGJjOWQ3In0sImlhdCI6MTYyMzUwMzQ3NX0.LGagHGBZt8un1XpS0k4E7mHSICkoXpzkc4slnIVnui4",
};
let product = {
  result: "success",
  product: {
    created: "2021-06-10T13:12:19.801Z",
    _id: "60c21085ac538219e818c682",
    name: "I watch 6",
    brand: "Apple",
    image: "1fajlfkads",
    price: 60000,
    qty: 10,
    category: "Watches",
    desc: "Best Small Size Iphone",
    usage: "Use Back Cover",
    __v: 0,
  },
};
//How to read Object properties
/*
object.propertyname 
*/
console.log(employee.name);
console.log(product.product.category);
let x = 10
console.log(x)