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
