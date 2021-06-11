class CentralTax {
  tax = 18;
}
class StateTax extends CentralTax {}
let st = new StateTax();
console.log(st);
console.log(st.tax);


//inheriting the parent class properties/member to child class
// using extends keywors 

