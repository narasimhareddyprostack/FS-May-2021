class CentralTax {
  tax = 18;
  get_CentralTax = () => {
    var discount = 5;
    return this.tax - discount;
  };
}

class Goa extends CentralTax {}

let g = new Goa();
console.log(g.tax);
console.log(g.get_CentralTax());

/* class Orissa extends CentralTax {
    tax = 25;
  }
  class Karnataka extends CentralTax {
    tax = 35;
  } */
/* 
let o = new Orissa();
console.log(o.tax); */
