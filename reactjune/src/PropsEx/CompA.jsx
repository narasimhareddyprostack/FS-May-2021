import React from "react";
import CompB from "./CompB";
import CompC from "./CompC";
function CompA() {
  let emp_No = 101;
  let emp_Name = "Kavitha";
  let emp = { name: "Narasimha", age: 37 };
  return (
    <React.Fragment>
      <h4> CompA Data ...</h4>
      <span>Emp No:{emp_No}</span>
      <hr />
      <CompB emp_No={emp_No} emp={emp} emp_Name={emp_Name} />
      <CompC one={emp_No} two={emp.age} three={"three"} />
    </React.Fragment>
  );
}
export default CompA;
/*
<input type="submit" value={one} />
*/
