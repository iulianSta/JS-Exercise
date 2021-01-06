/* 1. Create two variables.
One variable should contain a string value and
the other should contain a number. Concatenate the string and the number.*/
let str = "This is a string.";
let num = 123;
console.log(str + num);
/*/2. Check if the following numbers are even numbers.
Use a ternary and if the number is even print 30 is even, else print that it is odd.
33, 40, 2,1,22*/
let a = 33;
let b = 40;
let c = 2.1;
let d = 22;
let numA = a % 2;
console.log(numA);
console.log(numA == 0 ? `${a} is even` : `${a} is odd`);
let numB = b % 2;
console.log(numB);
console.log(numB == 0 ? `${b} is even` : `${b} is odd`);
let numC = c % 2;
console.log(numC);
console.log(numC == 0 ? `${c} is even` : `${c} is odd`);
let numD = d % 2;
console.log(numD);
console.log(numD == 0 ? `${d} is even` : `${d} is odd`);

// Create a variable with the value of “123”. Convert it to a number.
let strA = "123";
let newStr = parseInt(strA, 10);
console.log(newStr);
// Create a variable with the value of “130.7". Convert it to a number.
let strB = "130.7";
let newStrB = parseFloat(strB);
console.log(newStrB);
// Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
let isDog = false;
console.log(isDog ? "pat, pat" : "find me a dog to pat!");
