let x, y, z;
console.log(x);
x = 4;
y = 5;
z = x + y;
console.log(Math.max(3, 5, 2, x, y, 100));
console.log(Math.min(x, y, z));
let str = "20.4";
let strIntroNum = parseInt(str, 10); //always use pls
// 0,1,2,3,4,5,6,7,8,9 - 10 comes from the base number of decimals number
console.log("parseInt", strIntroNum);
let strIntroNum1 = +str; // never use
console.log("+str", strIntroNum1);
let strIntroNum2 = str * 1; // we don't use
console.log("*1 =", strIntroNum2);
let strIntFloat = parseFloat(str);
console.log("parseFloat", strIntFloat);
console.log(((x + y) / (z + 2.44)) * 29 +x);
// Number + String
let d, f, r;
d = "H";
f = 33;
console.log(d + f);
// Number + Boolean
r = true; // true-1; false-0
console.log(f + r); // 33 + 1 = 34
// String + String
let str1 = "Hi";
let str2 = " I am Iulian";
console.log(str1 + str2);
// ++ --
let a = 1;
console.log(a++); // work with a
console.log(a);   // then + 1
console.log(++a); // will + 1 directly
 
let q = 3;
console.log(q--); // work with q
console.log(q);   // then - 1
console.log(--q); // will - 1 directly
// console.log(a);
// typeof
console.log(typeof str1);
console.log(typeof x);
console.log(typeof console.log);
console.log(typeof Math);
// 3.444444444444
// (0.1*0.2)
let floatNum1 = 0.1;
let floatNum2 = 0.2;
let result = floatNum1 * floatNum2;
console.log(result);
// toFixed()
let num = 4;
//console.log(result.toFixed(3));
console.log(result.toFixed(num));

// Math.random()
console.log(Math.random()); // print a random number diferent time
console.log(Math.floor(Math.random() * 10) + 1); // (a random number * 10) + 1 
// - in this case, the result will be between 1 - 10
// * 10 - the result will be between 0 - 10 
// for numbers between 0 - 100 -> the result will be between 0 - 99

// ==   equal
// !=   not equal
// 1 == 1 -> true
// 1 != 44 -> true
console.log(1 == 1);
console.log(1 != 2);
console.log(1 == 1 && 1 == 10);
/* true && false => false
   false && true => false
   true && true => true
   false && false => false */
// ||  or
/* true || false => true
   false || true => true
   false || false => false
   true || true => true */
   console.log(1 == 20 || (1 == 1 && 1 != 292)); // false || true && true

   let bool1,bool2,bool3;
   bool1 = true;
   bool2 = false;
   console.log(bool1 && bool2 ? "cool" : "not cool");
   console.log(bool1 || bool2 ? "cool" : "not cool");

   // ===  ==
   let numInStr = "10";
   let numb = 10;
   console.log(numInStr == numb ? "cool" : "not cool"); // cool - true
   console.log(numInStr === numb ? "cool" : "not cool"); // not cool - false
 
   /* 1 = true
      0 = false
      "" = false
      " " , "H" = true
      true = true
      false = false 
      3.14 = true */
      
   console.log(3.14 ? "Yeah it's true" : "Noooo");

   // Assigment
   // Create a program that prints a random integer from 1 - 6.
   console.log(Math.floor(Math.random() * 6) + 1);


   // Math.atan()
   /*  The Math.atan() function returns the arctangent (in radians) of a number */
   // Ex: Calculates angle of a right-angle triangle in radians
   
   function calcAngle(opposite, adjacent) {
    return Math.atan(opposite / adjacent);
  }

  console.log(calcAngle(8, 10));
// expected output: 0.6747409422235527

console.log(calcAngle(5, 3));
// expected output: 1.0303768265243125

/* Syntax is Math.atan(x)
   x is a number
   Return value - The arctangent (in radians) of the given number
   The Math.atan() method returns a numeric value */ 

Math.atan(1);   // 0.7853981633974483
console.log(Math.atan(1));
Math.atan(0);   // 0
console.log(Math.atan(0));
Math.atan(-0);  // -0
console.log(Math.atan(-0));

Math.atan(Infinity);   //  1.5707963267948966
Math.atan(-Infinity);  // -1.5707963267948966

/* The angle that the line [(0,0);(x,y)] forms with the x-axis in a 
Cartesian coordinate system */
Math.atan(y / x);

// 0000 4 bit
// 0001
// 32 bit  0000 0000 0000 0000 0000 0000 0000 0000

