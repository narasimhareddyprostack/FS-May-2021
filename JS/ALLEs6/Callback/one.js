let sample = (a, b, c, d, callback) => {
  callback(b);
};

let getDetails = (name) => {
  console.log("Name:", name);
};
sample(10, "Narasimha", [38, 42], { id: 101, loc: "Bangalore" }, getDetails);
//passing - number , string, array , object
//passing function as argument to function
