let employees = [
  { id: 101, name: "narasimha", salary: 50000 },
  { id: 102, name: "Kavitha", salary: 60000 },
];

let createNewEmployee = (employee, callback) => {
  setTimeout(() => {
    employees.push(employee);
    callback();
  }, 5000);
};
let getEmployees = () => {
  setTimeout(() => {
    let employeeRows = "";
    employees.forEach((employee) => {
      employeeRows += `<tr> <td> ${employee.id}</td>
        <td> ${employee.name}</td>
        <td> ${employee.salary}</td></tr>`;
    });
    document.querySelector("#table-body").innerHTML = employeeRows;
  }, 1000);
};

createNewEmployee({ id: 103, name: "Raj Kumar", salary: 70000 }, getEmployees);
createNewEmployee({ id: 104, name: "Ravi Kumar", salary: 80000 }, getEmployees);
//invoking a function - passing object, and function as argument - call back
