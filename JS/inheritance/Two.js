class Parent {
  constructor(parentAge) {
    console.log("Parent class Constructor");
    this.parentAge = parentAge;
  }
}
class Child extends Parent {
  constructor(parentAge, childAge) {
    super(parentAge);  // excuting parent class constructor
    console.log("Child Class Constructor");
    this.childAge = childAge;
  }
}
let c1 = new Child("p50", "c25");
console.log(c1);


// Inheritinig the parent class properties and method to child class - extends keyword