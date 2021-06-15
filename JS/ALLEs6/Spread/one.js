/*
spread Operator (...)
- array 
- object
Extract & Copy 
*/
let size = [38, 40, 42];
let newSize = [44, 46];

size = [...size, ...newSize];
//     [ 38, 40, 42,  44, 46]                ]

console.log(size);
