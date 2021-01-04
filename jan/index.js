// 1.
let text = "I can walk in the park all day!";
let word = text.substring(18, 22);
console.log(word);
// 2.
let message = "Hello World";
let print = message.toUpperCase();
console.log(print);
// 3.
let seccondMessage = "Earthlings";
let seccondPrint = seccondMessage.toLowerCase();
console.log(seccondPrint);
// 4.
let language = "JavaScript";
let part = language.substring(3, 6);
console.log(part);
// 5.
let someText = "nice shoes";
let partOfSomeText = someText.includes("I");
console.log(partOfSomeText);
// 6.
let str = "J";
console.log( str + language + str);

//New assigment
/*7. Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string.
The string length must be 3 or more.
 eg. of output: javascript => iptJavaScriptipt*/
 let newString = `iptJavaScriptipt`;
 console.log(newString);
 // OR
 let lastThree = language.substring(language.length - 3);
let newLanguage = lastThree + language + lastThree;
console.log(newLanguage);
 /*8. Create a variable and assign a string value to it.
 Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.*/
 let greetings = "Hi there";
 console.log(greetings.toUpperCase());
 console.log(greetings.includes("Java"));
 /*9. Create a new string from a given string by changing the position of first and last characters.
 The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ*/
 let anotherLanguage = language[9] + language.substring(1, 9)  + language[0];
 console.log(anotherLanguage);
 /*10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”.
 Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.*/
 let firstName = "Iulian";
 let city = "Altenburg";
 let job = "Student";
 let aboutMe = `My name is ${firstName}. I live in ${city} and I am a ${job} at DCI.`;
 console.log(aboutMe);
 /*11. Declare a variable and assign the value “the quick brown fox” (all in lower case).
 Capitalize the first letter of that string. Print the result to the console.*/
 let fox = "the quick brown fox";
 let foxUpper = fox[0].toUpperCase() + fox.substring(1);
 console.log(foxUpper);