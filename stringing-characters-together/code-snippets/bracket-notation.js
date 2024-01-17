let jsCreator = "Brendan Eich";
let firstInitial = jsCreator[0];
let lastInitial = jsCreator[8];
let outputStr = "JavaScript was created by somebody with initials " + firstInitial + "." + lastInitial + ".";

console.log(outputStr);

console.log(jsCreator[-1]); //undefined /bc indices start at 0, 1, 2, etc upward from 0 - not a negative index(?) based on what I've read so far
console.log(jsCreator[42]); //there is not a 42nd index for this string ergo undefined
//ran code first with Node.js debugger in order to examine relevant syntax, runtime, and logic errors

//let phrase = 'Code for fun';
//console.log(phrase[2]);

/*let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);

cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " + stateName;
console.log(location);

let language = "JavaScript";
language = language.replace('J', 'Q');
language = language.slice(0, 5);
console.log(language);

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);
console.log('Launch\nCode'); */

//the above code blocks are all practice and quiz questions, section review etc

//string mad lib practice from quiz: https://replit.com/@ashleyodberg/String-Mad-Lib-1

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);

const school = [
   ["science", "computer", "art"],
   ["Jones", "Willoughby", "Rhodes"]
];

console.log(school);
console.log(school[0]);
console.log(school[1]);

school[0].push("dance");
console.log(school[0]);
console.log(school[1]);

school[1].unshift("Holmes");
console.log(school[1]);

console.log(typeof console);


let firstName = "Grace";
let lastName = "Hopper";

console.log(firstName, "has", firstName.length, "characters");
console.log(lastName, "has", lastName.length, "characters");

let nonprofit = "Launchcode";
nonprofit = "LaunchCode";

console.log(nonprofit);
//the above code block shows the example from the textbook in the String Immutability section in Ch 7, demonstrating that you can modify the value that the variable is storing, rather than modifying the string itself, resulting in the variable then 'pointing' to a new value, with the old value remaining unchanged.

/*console.log(nonprofit.toLowerCase()); //this only changes the characters to lowercase for this console.log statement, rather than changing its value

console.log(nonprofit);
nonprofit[6] = "C";
console.log(nonprofit);*/

word = 'JavaScript';
word.toUpperCase()
console.log(word);

console.log(word.slice(4).toUpperCase());
//console.log(word);

let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0, 5);
console.log(language);

console.log(language.slice(1, 6));
console.log(language);

let org = " The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

//Playing with ASCII Codes:
let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1])
                + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3])
                + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5])
                + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7])
                + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);

console.log(characters);

//Special Characters Practice

console.log("A message\nbroken across lines,\n\tand indented");

//playing with \uXXXX format for using unicode characters https://unicode-table.com/en/
console.log("The interrobang character, \u203d, combines ? and !");

console.log("\"The dog's favorite toy is a stuffed hedgehog,\" said Chris");

//concatenation to combine strings and variables for a specific output:
let name = "Jack";
let currentAge = 9;

console.log("Next year, " + name + " will be " + (currentAge + 1) + ".");

console.log(`Next year, ${name} will be ${currentAge + 1}.`);

