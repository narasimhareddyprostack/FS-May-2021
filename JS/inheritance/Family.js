class Father {
  constructor() {
    console.log("Father/Parent class Constructor");
  }
  asset = 10000000;
  quality() {
    return "Good Qulities";
  }
}
class Son extends Father {
  constructor() {
    super();
    console.log("Son/Child Class Constructor");
  }

  quality() {
    return "Son - Good Qulities";
  }
}
let s1 = new Son();
console.log(s1);
