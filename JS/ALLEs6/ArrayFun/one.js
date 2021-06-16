let num = [1, 2, 3, 4, 5];

// [].map(()=>{})
/// [].forEach(()=>{})

let x = num.map((value) => {
  console.log(value);
  return value + 1;
});
console.log(x);
