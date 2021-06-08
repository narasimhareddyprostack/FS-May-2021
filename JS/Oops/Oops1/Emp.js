//class is blueprint/plan to construct objects
// class containes class members(properties/method)
class Emp {
  emp_No = 101;
  emp_Name = "kavitha";
  get_Emp_Info() {
    return "Hello";
  }
}

let emp1 = new Emp();
console.log(emp1.get_Emp_Info());
/* console.log(emp1.emp_No);
console.log(emp1.emp_Name); */

