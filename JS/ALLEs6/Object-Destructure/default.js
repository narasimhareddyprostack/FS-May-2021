let emp = { name: "kavitha", sal: 40000 };

let { sal, loc = "Bangalore" } = emp;

console.log(sal);
console.log(loc);
