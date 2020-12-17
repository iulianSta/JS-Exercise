//Programming Basics: Strings, Numbers and Booleans
//Exercises to become familiar with the string, number and boolean data types

//Declare a variable and assign a string as its value. 
//Make sure the string is at least 6 characters long. Print the variable to the console.
let cityN = "Altenburg";
console.log(cityN);

//Access the 2nd and 6th elements of the string using index notation.
//Print the elements to the console.
console.log(cityN[1]);
console.log(cityN[5]);

//Declare a variable called name and assign a string as its value.
let name1 = "Iulian";
//Declare a variable called age and assign a number as its value.
let age = 34;
//Declare a variable called year and assign a number as its value.
let year = 2020;
//Using your declared variables, print a string to the console.
//For example, “Basem is 37 in 2020”.
let x = " is ";
let y = " in ";
let sumAll = name1 + x + age + y + year;
console.log(sumAll);

//Declare a variable called isMarried and assign it a boolean value.
let isMarried = 20;
isMarried >= 20
? console.log("Yes")
: console.log("No");

//Declare a variable called programmingLanguage and assign “JavaScript” as its value.
//Declare a variable called isFun and give it a value of true.
//Print “JavaScript is fun: true” to the console, using your declared variables.
let programmingLanguage = "JavaScript";
let isFun = "true";
//Print the J and S of “JavaScript” from the variable programmingLanguage to the console.
console.log(programmingLanguage[0]);
console.log(programmingLanguage[4]);
//Print the length of the string “JavaScript” to the console.
console.log(programmingLanguage.length);

//Declare a variable named isStudent.
//If true, print “Ticket costs €5,00”. If false, print “Ticket costs €12,00".
let isStudent = 5;
isStudent >= 5
? console.log("Ticket costs €5,00")
: console.log("Ticket costs €12,00");
isStudent > 5
? console.log("Ticket costs €5,00")
: console.log("Ticket costs €12,00");

//Declare a variable named speedCheck.
//If speedlimit is 50km/h, and your speed is above that, print ‘you’re going too fast!’.
//If speed is lower than 50km/h, print ‘You’re driving below the speed limit, Oma’.
let speedCheck = 60;
speedCheck > 50
? console.log("You're going too fast!")
:console.log("You're driving below the speed limit, Oma!");
let speedCheck1 = 30;
speedCheck1 > 50
? console.log("You're going too fast!")
:console.log("You're driving below the speed limit, Oma!");
