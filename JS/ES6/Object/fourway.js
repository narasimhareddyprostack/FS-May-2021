/*
    1. Object Literal
    2. new Keywords
    3. class
    4. Object.create

*/
function employee(name) {
  this.name = name;
}

var emp = new employee("kavitha");
console.log(emp);
console.log(typeof emp);
