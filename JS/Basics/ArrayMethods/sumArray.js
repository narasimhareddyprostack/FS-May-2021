let marks = [10, 20, 30, 40];
//Find sum of array values
/*
    1.initilization , let i=0
    2.condition i<= array.lenght -1 
    3.incr/decr   i++ 
*/

let i = 0;
let sum = 0;
do {
  sum = sum + marks[i];
  i++;
} while (i <= marks.length - 1);

console.log(sum);
