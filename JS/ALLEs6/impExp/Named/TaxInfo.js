let Tax = 18;
let GST = 10;

let TaxAudit = { name: "one", value: "two" };

// export { Tax, GST, TaxAudit}; // Named Export es6
module.exports = { Tax, GST, TaxAudit }; //Named Es5
