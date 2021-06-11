class Parent {
  asset = 10000000;
  get_Parent_Quality() {
    return this.asset;
  }
}
class Child extends Parent {
  constructor() {
    super();
    this.child_Asset = 500000;
  }
 
}
let p1 = new Child();
//console.log(p1);
console.log(p1.get_Parent_Quality());
